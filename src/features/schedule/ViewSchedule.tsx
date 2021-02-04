import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Box } from '@material-ui/core';
import { fetchSchedule, selectSchedule } from './scheduleSlice';
import ViewSortableListFragment from '../sortable/ViewSortableListFragment';
import Loading from '../../components/Loading';
import ViewSessionFragment from '../session/ViewSessionFragment';
import ViewActivityFragment from '../activity/ViewActivityFragment';

export interface IUseParams {
  id: string;
}

const ViewSchedule = () => {
  const dispatch = useDispatch();
  const schedule = useSelector(selectSchedule);
  const [params, setParams] = useState<IUseParams>(useParams());

  useEffect(() => {
    const { id } = params;
    dispatch(fetchSchedule(id));
  }, [params, dispatch]);

  // wait till all the ids are fetched before displaying
  if (schedule.id === 0) {
    return <Loading />;
  }

  return (
    <Box mx='auto' my={3} maxWidth='450px'>
      <h2>View Schedule Screen</h2>

      <Box my={3}>
        <Card variant='outlined'>
          <h3>Sortables</h3>
          <ViewSortableListFragment sortableIds={schedule.sortableIds} />
        </Card>
      </Box>
    </Box>
  );
};

export default ViewSchedule;
