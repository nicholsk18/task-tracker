import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Box } from '@material-ui/core';
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
    <Box mx='auto' my={3} maxWidth='450px'>
      <Link to={`/view/activity/${activity.id}`}>
        <Card variant='outlined'>
          <CardContent>
            <h3>{activity.name}</h3>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default ViewActivityFragment;
