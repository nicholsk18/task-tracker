import React from 'react';

const ViewSortableListItem = ({ sortable }) => {
  return (
    <div>
      [{sortable.one}] [{sortable.two}]
    </div>
  );
};

export default ViewSortableListItem;
