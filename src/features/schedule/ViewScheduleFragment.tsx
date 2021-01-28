import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Box } from '@material-ui/core';
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
    <Box mx='auto' my={3} maxWidth='450px'>
      <Link to={`/view/schedule/${schedule.id}`}>
        <Card variant='outlined'>
          <CardContent>
            <h3>Schedule</h3>
            {schedule.id !== 0 && (
              <ViewSortableListFragment sortableIds={schedule.sortableIds} />
            )}
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default ViewScheduleFragment;
