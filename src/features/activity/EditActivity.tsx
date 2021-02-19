import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Activity } from '../../models/Activity';
import { getActivity, getTag } from '../../app/fetchData';
import Loading from '../../components/Loading';
import { Box, Button, Card } from '@material-ui/core';
import ViewTagFragment from '../tag/ViewTagFragment';
import ViewActivityFragment from './ViewActivityFragment';

interface IUseParams {
  id: string;
}

const EditActivity: FunctionComponent = () => {
  const [activity, setActivity] = useState<Activity>();
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
    <Box mx={5}>
      <h2>Edit Activity</h2>
      <Box my={3}>
        <Card variant='outlined'>
          <h3>{activity.name}</h3>
        </Card>
      </Box>

      <Box my={3}>
        <Card variant='outlined'>
          <h3>Activities</h3>
          {activity.tagIds.map((tagId) => (
            <Box m={3} key={tagId}>
              <Card variant='outlined'>
                <Box
                  px={3}
                  display='flex'
                  justifyContent='space-between'
                  alignItems='center'
                >
                  <ViewActivityFragment activityId={tagId} />
                  <Button
                    component={Link}
                    to={`/edit/tag/${activity.id}`}
                    size='large'
                    variant='contained'
                    color='secondary'
                  >
                    X
                  </Button>
                </Box>
              </Card>
            </Box>
          ))}
          <Box m={3}>
            <Button
              variant='contained'
              color='primary'
              component={Link}
              to={`/add/tag/${activity.id}`}
            >
              Add Relationship
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default EditActivity;
