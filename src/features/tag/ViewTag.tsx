import React, { FunctionComponent, useEffect, useState } from 'react';
import { Box, Card, Button } from '@material-ui/core';
import { useParams, Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import ViewActivityFragment from '../activity/ViewActivityFragment';

interface IUseParams {
  id: string;
}

interface ITag {
  id: number;
  name: string;
  activitiesIds: [];
}

const ViewTag: FunctionComponent = () => {
  const [tag, setTag] = useState<ITag>();
  const [tagId, setTagId] = useState<string>()
  const [params, setParams] = useState<IUseParams>(useParams());

  useEffect(() => {
    const {id} = params
    setTagId(id)
  }, [tagId])

  useEffect(() => {
    if (tagId) {
    fetch(`http://localhost:3001/tag/${tagId}`)
      .then((res) => res.json())
      .then((data) => {
        setTag(data);
      });
    }
  }, [tagId]);

  if (!tag) {
    return <Loading />;
  }

  return (
    <Box mx='auto' maxWidth='450px'>
      <h2>View Tag</h2>
      <Box my={3}>
        <Card variant='outlined'>
          <h3>{tag.name}</h3>
        </Card>
      </Box>

      <Box my={3}>
        <Card variant='outlined'>
          <h3>Activities</h3>
          {tag.activitiesIds.length !== 0 ? (
            tag.activitiesIds.map((id) => (
              <div key={id}>
                {/* I really thought key was suppost to key 
                from state being overriden by next called componenet */}
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
        <Button component={Link} to={`/edit/tag/${tagId}`} size="large" variant="contained" color="primary">
          Edit Tag
        </Button>
      </Box>
    </Box>
  );
};

export default ViewTag;
