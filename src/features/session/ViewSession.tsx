import React, { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  }, [dispatch, fetchSession]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Box>
      <h1>View Session Screen</h1>
      <div>
        <Link to={`/view/activity/${session.activityId}`}>
          <ViewActivityFragment activityId={session.activityId} />
        </Link>
        <ViewScheduleFragment scheduleId={session.scheduleId} />
      </div>
    </Box>
  );
};

export default ViewSession;
