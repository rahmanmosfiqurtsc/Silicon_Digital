import { Search, Bell, MoreVertical } from "lucide-react";

export default function DashboardMockup() {
  return (
    <div className="dashboard-wrap">
      <div className="dashboard-card">
        <aside className="dashboard-sidebar"><span className="side-logo">●</span>{Array.from({length: 7}, (_, i) => <i key={i} />)}</aside>
        <div className="dashboard-main">
          <div className="dashboard-top"><span className="fake-line w-24" /><div className="flex items-center gap-3 text-slate-400"><Search size={12}/><span>⠿</span><Bell size={12}/><span className="avatar">●</span></div></div>
          <div className="stats-grid"><div className="stat pink"><small>Sign ups</small><b>18 ♙</b></div><div className="stat blue"><small>Revenue</small><b>20 $</b></div><div className="stat teal"><small>New Clients</small><b>16 ♙</b></div></div>
          <div className="chart-panel"><div className="chart-label">Revenue overview <MoreVertical size={11}/></div><svg viewBox="0 0 320 105" role="img" aria-label="Upward trend chart"><path d="M0 85 C15 35 32 40 47 55 S75 70 93 48 S124 56 144 25 S181 15 198 42 S226 48 244 28 S281 35 320 2" fill="none" stroke="#a855f7" strokeWidth="2.5"/></svg></div>
          <div className="dashboard-foot"><span>● Latest transactions</span><span>● New clients</span></div>
        </div>
        <div className="schedule"><b>Pay Schedule</b><h4>August</h4><div className="calendar-grid">{Array.from({length: 28}, (_, i) => <span key={i}>{i+1}</span>)}</div></div>
      </div>
      <div className="saving-card"><small>Savings</small><div className="donut"><span>Travel<br/><b>$480</b></span></div></div>
    </div>
  );
}