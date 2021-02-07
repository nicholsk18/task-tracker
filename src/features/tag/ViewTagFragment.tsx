import { Box, Card } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  tagIds: [];
}

const ViewTagFragment: FunctionComponent<IProps> = ({ tagIds }) => {
  return (
    <Box m={2}>
      <h2>Tags</h2>
      <Box my={3}>
        <Card variant='outlined'>
          <Link to='/view/tag'>
            <Box py={3}>Exercise</Box>
          </Link>
        </Card>
      </Box>
      <Box my={3}>
        <Card variant='outlined'>
          <Link to='/view/tag'>
            <Box py={3}>Outdoor</Box>
          </Link>
        </Card>
      </Box>
    </Box>
  );
};

export default ViewTagFragment;
