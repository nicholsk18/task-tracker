import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSortableList, selectSortableList } from './sortableListSlice';

const ViewSortableListFragment = ({ sortableId }) => {
  const sortableList = useSelector(selectSortableList);
  const dispatch = useDispatch();

  const [id, setId] = useState(sortableId);

  useEffect(() => {
    dispatch(fetchSortableList(id));
  }, [id, dispatch]);
  return (
    <div>
      {/* call a sortable fragment here */}
      <p>{sortableList.id}</p>
      <p>
        [{sortableList.one}][{sortableList.two}]
      </p>
    </div>
  );
};

export default ViewSortableListFragment;
