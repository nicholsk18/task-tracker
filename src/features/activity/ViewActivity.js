import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ViewScheduleFragment from '../schedule/ViewScheduleFragment';
import ViewSessionFragment from '../session/ViewSessionFragment';
import { selectActivity, isLoading, fetchActivity } from './activitySlice';
import '../../App.css';

export function ViewActivity() {
  const activity = useSelector(selectActivity);
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();
  const [params, setParams] = useState(useParams());

  useEffect(() => {
    const { id } = params;
    dispatch(fetchActivity(id));
  }, [params, dispatch]);

  if (loading) {
    return (
      <div className='container'>
        <p>LOADING</p>
      </div>
    );
  }
  return (
    <div className='container'>
      <h2>View Activity Screen</h2>
      <div className='view-item'>
        <h3>{activity.name}</h3>
      </div>
      <div className='view-item'>
        <Link to={`/view/schedule/${activity.id}`}>
          <ViewScheduleFragment schedule={activity.schedule} />
        </Link>
      </div>
      <div className='view-item'>
        <ViewSessionFragment />
      </div>
    </div>
  );
}
