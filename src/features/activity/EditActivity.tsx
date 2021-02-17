import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Activity } from '../../models/Activity';
import { getActivity, getTag } from '../../app/fetchData';
import Loading from '../../components/Loading';
import { Box, Button, Card } from '@material-ui/core';
import ViewActivityFragment from './ViewActivityFragment';
import ViewTagsFragment from '../tag/ViewTagsFragment';

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
          {activity.tagIds.length !== 0 ? (
            <Box display='flex' alignItems='center'>
              <Box flexGrow={5}>
                <ViewTagsFragment tagIds={activity.tagIds} />
              </Box>
            </Box>
          ) : (
            <Box m={3}>
              <Card variant='outlined'>
                <p>No Related Activities</p>
              </Card>
            </Box>
          )}
          <Box m={3}>
            <Button
              variant='contained'
              color='primary'
              component={Link}
              to={`/add/activity/${activity.id}`}
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
