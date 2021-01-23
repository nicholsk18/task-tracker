import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import ViewScheduleFragment from '../schedule/ViewScheduleFragment';
import { fetchSession, selectSession, isLoading } from './sessionSlice';

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
      <p>ScheduleID: int</p>
    </div>
  );
};

export default ViewSession;
