import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Box } from '@material-ui/core';
import { selectActivity, isLoading, fetchActivity } from './activitySlice';
import Loading from '../../components/Loading';

export interface IUseParams {
  id: string;
}

export function ViewActivity() {
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
      {/* We only talked about activity.name in this view? */}
      {/*<Box my={3}>*/}
      {/*<Link to={`/view/schedule/${activity.id}`}>*/}
      {/*  {console.log(activity)}*/}
      {/*  <ViewScheduleFragment schedule={activity.schedule} />*/}
      {/*</Link>*/}
      {/*</Box>*/}
      {/*<Box my={3}>*/}
      {/*  <Card variant='outlined'>*/}
      {/*    <ViewSessionFragment />*/}
      {/*  </Card>*/}
      {/*</Box>*/}
    </Box>
  );
}
