import React from 'react';
import { Card, Box, Button, Typography } from '@material-ui/core';

const ViewSessionFragment = () => {
  return (
    <Box mx={3} my={3}>
      <Card variant='outlined'>
        <Box my={3}>
          <Button variant='outlined' color='primary'>
            Load Previous
          </Button>
        </Box>
        <Box my={3}>
          <Card variant='outlined' style={{ margin: '30px' }}>
            <Typography component='div'>Session</Typography>
          </Card>
          <Card variant='outlined' style={{ margin: '30px' }}>
            <Typography component='div'>Session</Typography>
          </Card>
        </Box>
        <Box my={3}>
          <Button variant='outlined' color='primary'>
            Load More
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ViewSessionFragment;
