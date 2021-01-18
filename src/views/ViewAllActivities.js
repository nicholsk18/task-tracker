//https://reactjs.org/docs/lists-and-keys.html

import React, { useEffect } from 'react';
import ActivityListItem from '../components/ActivityListItem';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchAllActivities,
  selectAllActivities,
} from '../features/allActivities/allActivitiesSlice';
import style from './ViewAllActivities.module.css';

export function ViewAllActivities() {
  const activities = useSelector(selectAllActivities);
  const dispatch = useDispatch();

  // fetch once only
  useEffect(() => {
    dispatch(fetchAllActivities());
  }, []);

  return (
    <div className={style.container}>
      <h2>
        View
        <br />
        Activities
      </h2>

      {activities.map((activity) => (
        <div key={activity.id} className={style.activity_container}>
          <Link to={`/view/Activity/${activity.id}`}>
            <ActivityListItem name={activity.name} />
          </Link>
        </div>
      ))}
    </div>
  );
}
