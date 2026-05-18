import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  loading?: 'lazy' | 'eager';
}

export default function LazyImage({ src, alt, className, wrapperClassName, loading = 'lazy' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const show = inView || loading === 'eager';

  return (
    <div ref={ref} className={cn('relative overflow-hidden', wrapperClassName)}>
      {/* Placeholder skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      {show && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setLoaded(true)}
          className={cn(
            'transition-opacity duration-500',
            loaded ? 'opacity-100' : 'opacity-0',
            className
          )}
        />
      )}
    </div>
  );
}
