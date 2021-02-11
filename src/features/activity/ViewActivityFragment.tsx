import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Box } from '@material-ui/core';
import { fetchActivity, selectActivity } from './activitySlice';
import Loading from '../../components/Loading'

interface IProps {
  activityId: string;
}

interface IActivity {
  id: number;
  name: string;
  tagIds: [];
}

const ViewActivityFragment: FunctionComponent<IProps> = ({ activityId }) => {
  // const activity = useSelector(selectActivity);
  // const dispatch = useDispatch();
  //
  // const [id, setId] = useState(activityId);
  //
  // useEffect(() => {
  //   dispatch(fetchActivity(id));
  // }, [id, dispatch]);

  const [activity, setActivity] = useState<IActivity>();
  const [id, setId] =useState(activityId)

  useEffect(() => {
    fetch(`http://localhost:3001/activity/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setActivity(data);
      });
  }, [id]);

  if (!activity) {
    return <Loading />;
  }

  return (
    <Box my={3} mx={3} >
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
