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
  const [tagId, setTagId] = useState<number>();
  const [params, setParams] = useState<IUseParams>(useParams());

  useEffect(() => {
    const id = parseInt(params.id);
    setTagId(id);
  }, [tagId]);

  useEffect(() => {
    const loadTag = async () => {
      if (tagId) {
        setTag(await getTag(tagId));
      }
    };

    loadTag();
  }, [tagId]);

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
          {tag.activityIds.length !== 0 ? (
            tag.activityIds.map((id) => (
              <Box key={id} display='flex' alignItems='center'>
                <Box flexGrow={5}>
                  <ViewActivityFragment activityId={id} />
                </Box>

                <Box flexGrow={1}>
                  <Button
                    component={Link}
                    to={`/edit/tag/${tagId}`}
                    size='large'
                    variant='contained'
                    color='secondary'
                  >
                    X
                  </Button>
                </Box>
              </Box>
            ))
          ) : (
            <Box m={3}>
              <Card variant='outlined'>
                <p>No Related Activities</p>
                <Button component={Link} to={`/add/activity/`}>
                  Add activity
                </Button>
              </Card>
            </Box>
          )}
        </Card>
      </Box>
    </Box>
  );
};

export default EditTag;
