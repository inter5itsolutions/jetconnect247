import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { MapPin, Loader2 } from 'lucide-react';
import airportsData from '@/lib/data/airports.json';

interface Airport {
  i: string;
  n: string;
  c: string;
  o: string;
}

interface AirportInputProps {
  value: string;
  onChange: (iata: string) => void;
  placeholder?: string;
  label: string;
  error?: string;
  disabled?: boolean;
}

const localAirports: Airport[] = airportsData as Airport[];

interface ApiAirport {
  iata: string;
  name: string;
  country: string;
}

function highlightMatch(text: string, query: string) {
  if (!query.trim()) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>{text.slice(0, idx)}<span className="font-bold text-brand-white">{text.slice(idx, idx + query.length)}</span>{text.slice(idx + query.length)}</>
  );
}

function formatAirport(a: Airport | ApiAirport, query: string) {
  if ('c' in a) {
    return (
      <div className="text-xs text-brand-soft-silver mt-0.5">
        {a.c}, {a.o} <span className="font-mono text-brand-silver-blue ml-1">{a.i}</span>
      </div>
    );
  }
  return (
    <div className="text-xs text-brand-soft-silver mt-0.5">
      {a.country} <span className="font-mono text-brand-silver-blue ml-1">{a.iata}</span>
    </div>
  );
}

function getName(a: Airport | ApiAirport) {
  return 'n' in a ? a.n : a.name;
}

function getIata(a: Airport | ApiAirport) {
  return 'i' in a ? a.i : a.iata;
}

function getType(a: Airport | ApiAirport): 'local' | 'api' {
  return 'c' in a ? 'local' : 'api';
}

export default function AirportInput({ value, onChange, placeholder = 'Search airport...', label, error, disabled }: AirportInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [focusedIdx, setFocusedIdx] = useState(-1);
  const [apiResults, setApiResults] = useState<ApiAirport[]>([]);
  const [apiLoading, setApiLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedAirport = useMemo(() => localAirports.find(a => a.i === value), [value]);

  const localResults = useMemo(() => {
    if (!query.trim()) return localAirports.slice(0, 30);
    const q = query.toLowerCase();
    return localAirports
      .filter(a =>
        a.i.toLowerCase().includes(q) ||
        a.n.toLowerCase().includes(q) ||
        a.c.toLowerCase().includes(q) ||
        a.o.toLowerCase().includes(q)
      )
      .slice(0, 30);
  }, [query]);

  useEffect(() => {
    if (!query.trim()) { setApiResults([]); return; }
    const controller = new AbortController();
    const fetchApi = async () => {
      setApiLoading(true);
      try {
        const res = await fetch(
          `https://airportsapi.com/api/airports?filter[name]=${encodeURIComponent(query)}`,
          { signal: controller.signal }
        );
        if (!res.ok) { setApiResults([]); return; }
        const json = await res.json();
        const results: ApiAirport[] = (json.data || [])
          .filter((item: any) => item.attributes?.iata_code)
          .map((item: any) => ({
            iata: item.attributes.iata_code,
            name: item.attributes.name,
            country: item.attributes.icao_code || '',
          }));
        setApiResults(results);
      } catch {
        if (!controller.signal.aborted) setApiResults([]);
      } finally {
        setApiLoading(false);
      }
    };
    const timer = setTimeout(fetchApi, 250);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [query]);

  const results: (Airport | ApiAirport)[] = useMemo(() => {
    const seen = new Set(localResults.map(a => a.i));
    const merged: (Airport | ApiAirport)[] = [...localResults];
    for (const api of apiResults) {
      if (!seen.has(api.iata)) {
        seen.add(api.iata);
        merged.push(api);
      }
    }
    return merged.slice(0, 50);
  }, [localResults, apiResults]);

  useEffect(() => { setFocusedIdx(-1); }, [results.length]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectAirport = useCallback((airport: Airport | ApiAirport) => {
    const code = getIata(airport);
    onChange(code);
    setQuery(`${getName(airport)} (${code})`);
    setIsOpen(false);
    inputRef.current?.blur();
  }, [onChange]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIdx(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIdx(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter' && focusedIdx >= 0 && results[focusedIdx]) {
      e.preventDefault();
      selectAirport(results[focusedIdx]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setQuery(v);
    setIsOpen(true);
    if (v === '') onChange('');
  };

  const handleFocus = () => {
    if (!value) setQuery('');
    setIsOpen(true);
  };

  useEffect(() => {
    if (!value) { setQuery(''); return; }
    if (selectedAirport && !query) {
      setQuery(`${selectedAirport.n} (${selectedAirport.i})`);
    }
  }, [value]);

  return (
    <div className="space-y-2" ref={containerRef}>
      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-silver ml-1">{label}</label>
      <div className="relative">
        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-soft-silver pointer-events-none z-10" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue outline-none transition-all placeholder:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          autoComplete="off"
        />
        {isOpen && results.length > 0 && (
          <ul className="absolute z-50 top-full mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-xl max-h-64 overflow-y-auto">
            {results.map((airport, idx) => (
              <li
                key={`${getType(airport)}-${getIata(airport)}`}
                onClick={() => selectAirport(airport)}
                onMouseEnter={() => setFocusedIdx(idx)}
                className={`px-4 py-3 cursor-pointer border-b border-gray-100 last:border-0 transition-colors flex items-start justify-between ${
                  focusedIdx === idx ? 'bg-brand-silver-blue/10' : 'hover:bg-gray-50'
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium leading-tight truncate">
                    {highlightMatch(getName(airport), query)}
                  </div>
                  {formatAirport(airport, query)}
                </div>
                {getType(airport) === 'api' && (
                  <span className="text-[9px] uppercase tracking-widest text-brand-soft-silver/50 mt-1 shrink-0 ml-2">API</span>
                )}
              </li>
            ))}
            {apiLoading && (
              <li className="px-4 py-3 text-xs text-brand-soft-silver flex items-center gap-2">
                <Loader2 className="w-3 h-3 animate-spin" /> Searching more airports...
              </li>
            )}
          </ul>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
