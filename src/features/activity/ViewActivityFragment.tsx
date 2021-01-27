import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivity, selectActivity } from './activitySlice';

interface IProps {
  activityId: {
    id: string;
    name: string;
  };
}

const ViewActivityFragment: FunctionComponent<IProps> = ({ activityId }) => {
  const activity = useSelector(selectActivity);
  const dispatch = useDispatch();

  const [id, setId] = useState(activityId);

  useEffect(() => {
    console.log(id);
    // dispatch(fetchActivity(id));
  }, [id, dispatch]);

  return <div className='view-item'>{activity.name}</div>;
};

export default ViewActivityFragment;
