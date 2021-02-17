import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Box, Button } from '@material-ui/core';
import Loading from '../../components/Loading';
import ViewTagsFragment from '../tag/ViewTagsFragment';
import { getActivity } from '../../app/fetchData';

export interface IUseParams {
  id: string;
}
interface IActivity {
  id: number;
  name: string;
  tagIds: number[];
}

const ViewActivity: FunctionComponent = () => {
  const [activity, setActivity] = useState<IActivity>();
  const [params, setParams] = useState<IUseParams>(useParams());

  useEffect(() => {
    const id = parseInt(params.id);
    const loadActivity = async () => {
      setActivity(await getActivity(id));
    };

    loadActivity();
  }, [params]);

  if (!activity) {
    return <Loading />;
  }
  return (
    <Box mx='auto' maxWidth='450px'>
      <h2>View Activity Screen</h2>
      <Box my={3}>
        <Card variant='outlined'>
          <h3>{activity.name}</h3>
        </Card>
      </Box>
      <Box my={3}>
        <Card variant='outlined'>
          <ViewTagsFragment tagIds={activity.tagIds} />
        </Card>
      </Box>

      <Box my={3}>
        <Button
          color='primary'
          variant='contained'
          fullWidth={true}
          component={Link}
          to={`/edit/activity/${activity.id}`}
        >
          Edit
        </Button>
      </Box>
    </Box>
  );
};

export default ViewActivity;
