import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActivity, selectActivity } from '../activity/activitySlice';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';

const ViewSchedule = () => {
  const dispatch = useDispatch();
  const activity = useSelector(selectActivity);
  const [params, setParams] = useState(useParams());

  useEffect(() => {
    const { id } = params;
    dispatch(fetchActivity(id));
  }, [params, dispatch]);

  return (
    <div>
      <h3>View Schedule Screen</h3>
      <div>
        <h4>{activity.name}</h4>
      </div>
      <div>
        <h4>Sortables</h4>
        <div>
          <p>stuff</p>
        </div>
        <div>
          <p>stuff</p>
        </div>
      </div>
      <div>
        <h4>Sessions</h4>
        <div>
          <p>stuff</p>
        </div>
        <div>
          <p>stuff</p>
        </div>
      </div>
    </div>
  );
};

export default ViewSchedule;
