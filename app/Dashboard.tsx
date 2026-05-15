import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';
import { Plane, FileText, TrendingUp, Clock } from 'lucide-react';
import StatCard from '@/components/StatCard';

const visitData = [
  { name: 'Mon', quotes: 12 },
  { name: 'Tue', quotes: 19 },
  { name: 'Wed', quotes: 15 },
  { name: 'Thu', quotes: 22 },
  { name: 'Fri', quotes: 30 },
  { name: 'Sat', quotes: 25 },
  { name: 'Sun', quotes: 18 },
];

const destinationData = [
  { name: 'Lagos', value: 400 },
  { name: 'London', value: 300 },
  { name: 'Dubai', value: 200 },
  { name: 'Geneva', value: 150 },
  { name: 'Nairobi', value: 100 },
];

const stats = [
  { label: 'Total Inquiries', value: '1,284', change: '+12.5%', icon: FileText },
  { label: 'Active Missions', value: '14', change: 'Live', icon: Plane },
  { label: 'Fleet Efficiency', value: '89.2%', change: '+2.4%', icon: TrendingUp },
  { label: 'Pending Quotes', value: '28', change: 'Priority', icon: Clock },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 border-b border-gray-200">
          <div>
            <span className="text-brand-silver-blue text-xs font-bold uppercase tracking-[0.3em]">Executive Portal</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mt-4">Operations Hub</h1>
          </div>
          <div className="flex bg-gray-100 p-1 rounded-2xl border border-gray-200">
            {['Overview', 'Fleet', 'Quotes', 'Settings'].map((tab, i) => (
              <button key={tab} className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${i === 0 ? 'bg-brand-white text-white' : 'text-brand-soft-silver hover:text-brand-white'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-10 rounded-[2.5rem] space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold tracking-tight">Inquiry Trends</h3>
              <select className="bg-transparent border-none text-xs text-brand-soft-silver font-bold uppercase outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={visitData}>
                  <defs>
                    <linearGradient id="colorQuotes" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#778DA9" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#778DA9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="name" stroke="#9ca3af" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis stroke="#9ca3af" fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #e5e7eb' }} />
                  <Area type="monotone" dataKey="quotes" stroke="#778DA9" strokeWidth={3} fillOpacity={1} fill="url(#colorQuotes)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-card p-10 rounded-[2.5rem] space-y-8">
            <h3 className="text-xl font-bold tracking-tight">Top Destinations</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={destinationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="name" stroke="#9ca3af" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis stroke="#9ca3af" fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: '#f3f4f6' }} contentStyle={{ borderRadius: '12px', border: '1px solid #e5e7eb' }} />
                  <Bar dataKey="value" fill="#778DA9" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="glass-card rounded-[2.5rem] overflow-hidden">
          <div className="p-10 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-xl font-bold tracking-tight">Recent Quote Requests</h3>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full border border-green-200">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Live Data
              </span>
              <button className="text-xs font-bold text-brand-silver-blue uppercase tracking-widest hover:underline">View All</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  {['Inquirer', 'Route', 'Aircraft', 'Dispatch Date', 'Status', 'Ref ID'].map(head => (
                    <th key={head} className="px-10 py-6 text-[10px] uppercase tracking-widest text-brand-soft-silver font-bold">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { name: 'Aliko Dangote', route: 'LOS → LHR', aircraft: 'Global 7500', date: 'MAY 20, 2026', status: 'Pending', id: 'JC-8822-X' },
                  { name: 'Femi Otedola', route: 'LOS → DXB', aircraft: 'G650ER', date: 'MAY 22, 2026', status: 'Sent', id: 'JC-4491-A' },
                  { name: 'Avala Logistics', route: 'ACC → FIH', aircraft: 'Cargo Master', date: 'MAY 18, 2026', status: 'Confirmed', id: 'JC-1102-L' },
                  { name: 'UNICEF Nigeria', route: 'ABV → KAN', aircraft: 'Medical King Air', date: 'MAY 15, 2026', status: 'Priority', id: 'JC-9943-M' },
                ].map((row, i) => (
                  <tr key={i} className="group border-b border-gray-100 hover:bg-brand-silver-blue/5 transition-all">
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-silver-blue/10 flex items-center justify-center text-[10px] font-bold text-brand-silver-blue">{row.name.charAt(0)}</div>
                        <span className="font-bold">{row.name}</span>
                      </div>
                    </td>
                    <td className="px-10 py-6 font-mono text-xs text-brand-soft-silver uppercase tracking-wider">{row.route}</td>
                    <td className="px-10 py-6 font-medium">{row.aircraft}</td>
                    <td className="px-10 py-6 text-[11px] font-mono tracking-tighter text-brand-soft-silver">{row.date}</td>
                    <td className="px-10 py-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        row.status === 'Confirmed' ? 'bg-green-50 text-green-600 border border-green-200' :
                        row.status === 'Priority' ? 'bg-red-50 text-red-600 border border-red-200' :
                        'bg-brand-silver-blue/10 text-brand-silver-blue border border-brand-silver-blue/20'
                      }`}>{row.status}</span>
                    </td>
                    <td className="px-10 py-6 font-mono text-[10px] text-brand-soft-silver group-hover:text-brand-silver-blue transition-colors uppercase">{row.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
