import { Check, MoreVertical, CalendarDays } from "lucide-react";

export default function TaskMockup() {
  return (
    <div className="task-mockup">
      <div className="task-left">
        <h4>
          Task Master <span>✓</span>
        </h4>
        <div className="task-person">
          <span className="person-avatar">JD</span>
          <div>
            <b>John Doe</b>
            <small>UI/UX Designer</small>
          </div>
          <Check size={12} />
        </div>
        <div className="task-row">
          Product time tracker <span>◉</span>
        </div>
        <div className="task-calendar">
          <div>
            <CalendarDays size={12} /> Today
          </div>
          <button>+ Add task</button>
        </div>
        <div className="mini-days">
          M　T　W　T　F　S　S
          <br /> 8　9　10　11　12　13　14
        </div>
      </div>
      <div className="task-float">
        <div className="flex items-center justify-between">
          <b>Make Prototypes</b>
          <MoreVertical size={13} />
        </div>
        <small>Improve and adjust the product</small>
        <div className="tiny-avatars">
          <i>JD</i>
          <i>AM</i>
          <i>RK</i>
        </div>
        <div className="progress-label">
          Progress <b>45%</b>
        </div>
        <div className="progress-track">
          <span />
        </div>
        <div className="meeting">
          <b>Team Meeting</b>
          <small>10:00 AM</small>
          <span>●</span>
        </div>
      </div>
    </div>
  );
}
