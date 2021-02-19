import React, { FunctionComponent, useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { getAllActivities } from '../../app/fetchData';
import Loading from '../../components/Loading';
import { Activity } from '../../models/Activity';
import SearchRelationship from '../../components/SearchRelationship';

interface IUseParams {
  id: string;
}

const AddTagRelationship: FunctionComponent = () => {
  const [params, setParams] = useState<IUseParams>(useParams());
  const [allActivities, setAllActivities] = useState<Activity[]>();

  useEffect(() => {
    const loadAllActivities = async () => {
      setAllActivities(await getAllActivities());
    };

    loadAllActivities();
  }, [setAllActivities]);

  if (!allActivities) {
    return <Loading />;
  }

  return (
    <Box mx={5}>
      <h2>Add Tag Relationship</h2>
      <SearchRelationship name='Tag' relationships={allActivities} />
    </Box>
  );
};

export default AddTagRelationship;
