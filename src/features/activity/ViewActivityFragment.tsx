import React, { FunctionComponent, useEffect, useState } from 'react';
import { Card, CardContent, Box } from '@material-ui/core';
import Loading from '../../components/Loading';
import { getActivity } from '../../app/fetchData';

interface IProps {
  activityId: number;
}

interface IActivity {
  id: number;
  name: string;
  tagIds: number[];
}

const ViewActivityFragment: FunctionComponent<IProps> = ({ activityId }) => {
  const [activity, setActivity] = useState<IActivity>();

  useEffect(() => {
    const loadActivityFragment = async () => {
      setActivity(await getActivity(activityId));
    };

    loadActivityFragment();
  }, [activityId]);

  if (!activity) {
    return <Loading />;
  }

  return (
    <Box my={3} mx={3}>
      <Card variant='outlined'>
        <CardContent>
          <h3 style={{ margin: 0 }}>{activity.name}</h3>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ViewActivityFragment;
