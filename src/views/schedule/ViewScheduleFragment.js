import React from 'react';
import style from './ViewScheduleFragment.module.css';

const ViewScheduleFragment = ({ schedule }) => {
  return (
    <div className={style.schedule_container}>
      <h3>Schedule</h3>
      <div className={style.schedule_body}>
        <p>
          {schedule.repeatable.map((repeat) => (
            <span key={repeat}>[{repeat}]</span>
          ))}
        </p>
        <p>
          {schedule.start} - {schedule.end}
        </p>
      </div>
    </div>
  );
};

export default ViewScheduleFragment;
