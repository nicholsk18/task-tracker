import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import ViewSortableListFragment from '../sortable/ViewSortableListFragment';
import { fetchSchedule, selectSchedule } from './scheduleSlice';

interface IProps {
  scheduleId: string;
}

const ViewScheduleFragment: FunctionComponent<IProps> = ({ scheduleId }) => {
  const schedule = useSelector(selectSchedule);
  const dispatch = useDispatch();

  const [id, setId] = useState(scheduleId);

  useEffect(() => {
    dispatch(fetchSchedule(id));
  }, [id, dispatch]);

  return (
    <div className='view-item'>
      <h3>Schedule</h3>
      <div>
        {schedule.id !== 0 && (
          <ViewSortableListFragment sortableIds={schedule.sortableIds} />
        )}
      </div>
    </div>
  );
};

export default ViewScheduleFragment;
