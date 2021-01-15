import React from 'react';
import style from './ViewScheduleFragment.module.css';

const ViewScheduleFragment = ({ schedule }) => {
  return (
    <div className={style.schedule_container}>
      <h2>{schedule.name}</h2>
    </div>
  );
};

export default ViewScheduleFragment;
