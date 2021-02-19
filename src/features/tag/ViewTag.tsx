import React, { FunctionComponent, useEffect, useState } from 'react';
import { Box, Card, Button } from '@material-ui/core';
import { useParams, Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import ViewActivityFragment from '../activity/ViewActivityFragment';
import { getTag } from '../../app/fetchData';

interface IUseParams {
  id: string;
}

interface ITag {
  id: number;
  name: string;
  activityIds: number[];
}

const ViewTag: FunctionComponent = () => {
  const [tag, setTag] = useState<ITag>();
  const [params, setParams] = useState<IUseParams>(useParams());

  useEffect(() => {
    const id = parseInt(params.id);
    const loadTag = async () => {
      setTag(await getTag(id));
    };

    loadTag();
  }, [params]);

  if (!tag) {
    return <Loading />;
  }

  return (
    <Box mx={3}>
      <h2>View Tag Screen</h2>
      <Box my={3}>
        <Card variant='outlined'>
          <h3>{tag.name}</h3>
        </Card>
      </Box>

      <Box my={3}>
        <Card variant='outlined'>
          <h3>Activities</h3>
          {tag.activityIds.map((activityId) => (
            <Box m={3} key={activityId}>
              <Card variant='outlined'>
                <Link to={`/view/activity/${activityId}`}>
                  <ViewActivityFragment activityId={activityId} />
                </Link>
              </Card>
            </Box>
          ))}
        </Card>
      </Box>
      <Box my={3}>
        <Button
          color='primary'
          variant='contained'
          fullWidth={true}
          component={Link}
          to={`/edit/tag/${tag.id}`}
        >
          Edit Tag
        </Button>
      </Box>
    </Box>
  );
};

export default ViewTag;
