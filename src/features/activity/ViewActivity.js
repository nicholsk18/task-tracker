import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ViewScheduleFragment from './ViewScheduleFragment';
import { selectActivity, isLoading, fetchActivity } from './activitySlice';
import style from './ViewActivity.module.css';

export function ViewActivity() {
  const activity = useSelector(selectActivity);
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();
  const [params, setParams] = useState(useParams());

  // I think this is right! Changed the name to be better though.
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
      <h2>Activity</h2>
      <p>Id: {activity.id}</p>
      <p>Name: {activity.name}</p>
      <div>
        <ViewScheduleFragment schedule={activity.schedule} />
      </div>
    </div>
  );
}
