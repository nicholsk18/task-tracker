import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivity, selectActivity } from './activitySlice';

const ViewActivityFragment = ({ activityId }) => {
  const activity = useSelector(selectActivity);
  const dispatch = useDispatch();

  const [id, setId] = useState(activityId);

  useEffect(() => {
    dispatch(fetchActivity(id));
  }, [id, dispatch]);

  return <div className='view-item'>{activity.name}</div>;
};

export default ViewActivityFragment;
