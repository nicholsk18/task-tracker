import React, { FunctionComponent } from 'react';
import { Card, Box } from '@material-ui/core';

interface IProps {
  sortable: {
    id: number;
    one: string;
    two: string;
  };
}

const ViewSortableListItem: FunctionComponent<IProps> = ({ sortable }) => {
  return (
    <Box m={2}>
      <Card variant='outlined'>
        <Box py={2}>
          <span>[{sortable.one}]</span> <span>[{sortable.two}]</span>
        </Box>
      </Card>
    </Box>
  );
};

export default ViewSortableListItem;
