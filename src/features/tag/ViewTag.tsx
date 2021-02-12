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
  activityIds: [];
}

const ViewTag: FunctionComponent = () => {
  const [tag, setTag] = useState<ITag>();
  const [tagId, setTagId] = useState<string>();
  const [params, setParams] = useState<IUseParams>(useParams()); // this feels wrong

  useEffect(() => {
    const { id } = params;
    setTagId(id);
  }, [setTagId]);

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
    <Box mx={3}>
      <h2>View Tag</h2>
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
              <div key={id}>
                <ViewActivityFragment activityId={id} />
              </div>
            ))
          ) : (
            <Box m={3}>
              <Card variant='outlined'>
                <p>No Related Activities</p>
              </Card>
            </Box>
          )}
        </Card>
      </Box>
      <Box my={3}>
        <Button
          component={Link}
          to={`/edit/tag/${tagId}`}
          size='large'
          variant='contained'
          color='primary'
        >
          Edit Tag
        </Button>
      </Box>
    </Box>
  );
};

export default ViewTag;
