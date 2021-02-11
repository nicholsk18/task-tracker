import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import ViewScheduleFragment from '../schedule/ViewScheduleFragment';
import ViewActivityFragment from '../activity/ViewActivityFragment';
import { fetchSession, selectSession, isLoading } from './sessionSlice';
import Loading from '../../components/Loading';

const ViewSession: FunctionComponent = () => {
  const session = useSelector(selectSession);
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSession(1));
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Box>
      <h1>View Session Screen</h1>
      <div>
        <ViewActivityFragment activityId={session.activityId} />
        <ViewScheduleFragment scheduleId={session.scheduleId} />
      </div>
    </Box>
  );
};

export default ViewSession;
