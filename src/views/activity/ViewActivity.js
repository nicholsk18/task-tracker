import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ViewScheduleFragment from '../schedule/ViewScheduleFragment';
import ViewSessionFragment from '../session/ViewSessionFragment';
import {
  selectActivity,
  isLoading,
  fetchActivity,
} from '../../features/activity/activitySlice';
import style from './ViewActivity.module.css';

export function ViewActivity() {
  const activity = useSelector(selectActivity);
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();
  const [params, setParams] = useState(useParams());

  useEffect(() => {
    const { id } = params;
    dispatch(fetchActivity(id));
  }, [params]);

  if (loading) {
    return (
      <div className={style.view_container}>
        <p>LOADING</p>
      </div>
    );
  }
  return (
    <div className={style.view_container}>
      <h2>View Activity Screen</h2>
      <div className={style.view_name}>
        <h3>{activity.name}</h3>
      </div>
      <div className={style.view_schedule}>
        <ViewScheduleFragment schedule={activity.schedule} />
      </div>
      <div className={style.view_sessions}>
        <ViewSessionFragment />
      </div>
    </div>
  );
}
