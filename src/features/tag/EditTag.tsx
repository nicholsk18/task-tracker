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
  activityIds: [];
}
const EditTag: FunctionComponent = () => {
  const [tag, setTag] = useState<ITag>();
  const [tagId, setTagId] = useState<string>();
  const [params, setParams] = useState<IUseParams>(useParams());

  useEffect(() => {
    const { id } = params;
    setTagId(id);
  }, [tagId]);

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
              <div key={id}>
                {/* I really thought key was suppost to key
                from state being overriden by next called componenet */}
                <ViewActivityFragment activityId={id} />

                <Button
                  component={Link}
                  to={`/edit/tag/${tagId}`}
                  size='large'
                  variant='contained'
                  color='primary'
                >
                  This will be X once I do style
                </Button>
              </div>
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
