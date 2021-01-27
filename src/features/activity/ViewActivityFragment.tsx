import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivity, selectActivity } from './activitySlice';

interface IProps {
  activityId: string;
}

const ViewActivityFragment: FunctionComponent<IProps> = ({ activityId }) => {
  const activity = useSelector(selectActivity);
  const dispatch = useDispatch();

  const [id, setId] = useState(activityId);

  useEffect(() => {
    dispatch(fetchActivity(id));
  }, [id, dispatch]);

  return (
    <Link to={`/view/activity/${activity.id}`}>
      <div className='view-item'>{activity.name}</div>
    </Link>
  );
};

export default ViewActivityFragment;
