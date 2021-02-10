import React, { FunctionComponent, useEffect, useState } from 'react';
import { Box, Card } from '@material-ui/core';
import { useParams } from 'react-router-dom';
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
  const [params, setParams] = useState<IUseParams>(useParams());

  useEffect(() => {
    const { id } = params;
    fetch(`http://localhost:3001/tag/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTag(data);
      });
  }, [params]);

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
    </Box>
  );
};

export default ViewTag;
