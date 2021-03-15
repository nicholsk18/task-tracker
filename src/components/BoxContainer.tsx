import React, { FunctionComponent } from 'react';
import { Box, Card } from '@material-ui/core';

const BoxContainer: FunctionComponent = (props) => {
  return (
    <Box m={3}>
      <Card variant='outlined'>{props.children}</Card>
    </Box>
  );
};

export default BoxContainer;
