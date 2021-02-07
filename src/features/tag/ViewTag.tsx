import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Box, Card } from '@material-ui/core';

interface IProps {
  tag: {
    id: number;
    name: string;
  };
}

const ViewTag: FunctionComponent<IProps> = ({ tag }) => {
  return (
    <Box my={3}>
      <Card variant='outlined'>
        <Link to='/view/tag'>
          <Box py={3}>{tag.name}</Box>
        </Link>
      </Card>
    </Box>
  );
};

export default ViewTag;
