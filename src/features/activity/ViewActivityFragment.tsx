import React, { FunctionComponent, useEffect, useState } from 'react';
import { Card, CardContent, Box } from '@material-ui/core';
import Loading from '../../components/Loading';
import { getActivity } from '../../app/fetchData';

interface IProps {
  activityId: string;
}

interface IActivity {
  id: number;
  name: string;
  tagIds: [];
}

const ViewActivityFragment: FunctionComponent<IProps> = ({ activityId }) => {

  const [activity, setActivity] = useState<IActivity>();

  useEffect(() => {
    const fetchData = async () => {
      setActivity(await getActivity(activityId));
    }

    fetchData()
  }, [setActivity]);

  if (!activity) {
    return <Loading />;
  }

  return (
    <Box my={3} mx={3}>
      <Card variant='outlined'>
        <CardContent>
          <h3>{activity.name}</h3>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ViewActivityFragment;
