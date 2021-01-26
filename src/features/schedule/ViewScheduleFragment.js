import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import ViewSortableListFragment from '../sortable/ViewSortableListFragment';
import { fetchSchedule, selectSchedule } from './scheduleSlice';

const ViewScheduleFragment = ({ scheduleId }) => {
  const schedule = useSelector(selectSchedule);
  const dispatch = useDispatch();

  const [id, setId] = useState(scheduleId);

  useEffect(() => {
    dispatch(fetchSchedule(id));
  }, [id, dispatch]);

  return (
    <div className='container'>
      <h3>Schedule</h3>
      <div className='view-item'>
        {schedule.id !== 0 && (
          <>
            <p>{schedule.id}</p>
            <ViewSortableListFragment sortableIds={schedule.sortableIds} />
          </>
        )}
      </div>
    </div>
  );
};

export default ViewScheduleFragment;
