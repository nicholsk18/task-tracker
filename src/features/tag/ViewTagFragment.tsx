import React, { FunctionComponent } from 'react';
import { Box, Card } from '@material-ui/core';

interface IProps {
  tag: {
    id: number;
    name: string;
  };
}

const ViewTagFragment: FunctionComponent<IProps> = ({ tag }) => {
  return (
    <Box m={3}>
      <Card variant='outlined'>
        <Box p={3}>{tag.name}</Box>
      </Card>
    </Box>
  );
};

export default ViewTagFragment;
