import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Box } from '@material-ui/core';
import { selectActivity, isLoading, fetchActivity } from './activitySlice';
import Loading from '../../components/Loading';
import ViewTagFragment from '../tag/ViewTagFragment';

export interface IUseParams {
  id: string;
}

const ViewActivity: FunctionComponent = () => {
  const activity = useSelector(selectActivity);
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();
  const [params, setParams] = useState<IUseParams>(useParams());

  useEffect(() => {
    const { id } = params;
    dispatch(fetchActivity(id));
  }, [params, dispatch]);

  if (loading) {
    return <Loading />;
  }
  return (
    <Box mx='auto' maxWidth='450px'>
      <h2>View Activity Screen</h2>
      <Box my={3}>
        <Card variant='outlined'>
          <h3>{activity.name}</h3>
        </Card>
      </Box>
      <Box my={3}>
        <Card variant='outlined'>
          <ViewTagFragment tagIds={activity.tagIds} />
        </Card>
      </Box>
    </Box>
  );
};

export default ViewActivity;
