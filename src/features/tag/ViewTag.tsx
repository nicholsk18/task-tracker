import React, { FunctionComponent } from 'react';
import { Box, Card } from '@material-ui/core';

const ViewTag: FunctionComponent = () => {

  return (
    <Box mx='auto' maxWidth='450px'>
      <h2>View Tag</h2>
      <Box my={3}>
        <Card variant='outlined'>
          <h3>tag name</h3>
        </Card>
      </Box>

      <Box my={3}>
        <Card variant='outlined'>
          <h3>Activities</h3>
          <Box m={3}>
            <Card variant='outlined'>
              <p>activity name</p>
            </Card>
          </Box>

          <Box m={3}>
            <Card variant='outlined'>
              <p>activity name</p>
            </Card>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default ViewTag;
