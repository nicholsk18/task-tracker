import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ViewScheduleFragment from '../schedule/ViewScheduleFragment';
import ViewActivityFragment from '../activity/ViewActivityFragment';
import { fetchSession, selectSession, isLoading } from './sessionSlice';
import '../../App.css';

const ViewSession = () => {
  const session = useSelector(selectSession);
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSession(1));
  }, []);

  if (loading) {
    return (
      <div className='container'>
        <p>LOADING</p>
      </div>
    );
  }

  return (
    <div className='container'>
      <h1>View Session Screen</h1>
      <p>id: {session.sessionId}</p>
      <ViewActivityFragment activityId={session.activityId} />
      <ViewScheduleFragment scheduleId={session.scheduleId} />
    </div>
  );
};

export default ViewSession;
