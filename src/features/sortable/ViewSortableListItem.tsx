import React, { FunctionComponent } from 'react';

interface IProps {
  sortable: {
    id: number;
    one: string;
    two: string;
  };
}

const ViewSortableListItem: FunctionComponent<IProps> = ({ sortable }) => {
  return (
    <div>
      <span>[{sortable.one}]</span> <span>[{sortable.two}]</span>
    </div>
  );
};

export default ViewSortableListItem;
