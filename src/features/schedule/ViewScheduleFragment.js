import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import { fetchSchedule, selectSchedule } from './scheduleSlice';

const ViewScheduleFragment = ({ scheduleId }) => {
  const schedule = useSelector(selectSchedule);
  const dispatch = useDispatch();

  const [id, setId] = useState(scheduleId);

  useEffect(() => {
    dispatch(fetchSchedule(id));
  }, [id]);

  return (
    <div className='container'>
      <h3>Schedule</h3>
      <div className='view-item'>
        <p>{schedule.id}</p>
      </div>
    </div>
  );
};

export default ViewScheduleFragment;
