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
const EditTag: FunctionComponent = () => {
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
    <Box mx={5}>
      <h2>Edit Tag</h2>
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
                <Box
                  px={3}
                  display='flex'
                  justifyContent='space-between'
                  alignItems='center'
                >
                  <ViewActivityFragment activityId={activityId} />
                  <Button
                    component={Link}
                    to={`/edit/tag/${tag.id}`}
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
              to={`/add/tag/${tag.id}`}
            >
              Add Relationship
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default EditTag;
