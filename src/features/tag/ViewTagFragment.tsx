import React, { FunctionComponent, useEffect, useState } from 'react';
import { Box, Card } from '@material-ui/core';
import Loading from '../../components/Loading';
import { getTag } from '../../app/fetchData';

interface IProps {
  tagId: number;
}

interface ITag {
  id: number;
  name: string;
  activityIds: number[];
}

const ViewTagFragment: FunctionComponent<IProps> = ({ tagId }) => {
  const [tag, setTag] = useState<ITag>();

  useEffect(() => {
    const loadTag = async () => {
      setTag(await getTag(tagId));
    };

    loadTag();
  }, []);

  if (!tag) {
    return <Loading />;
  }

  return (
    <Card variant='outlined'>
      <Box py={3}>{tag.name}</Box>
    </Card>
  );
};

export default ViewTagFragment;
