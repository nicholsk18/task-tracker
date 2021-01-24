import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSortableList, selectSortableList } from './sortableListSlice';

const ViewSortableListFragment = ({ sortableId }) => {
  const sortableList = useSelector(selectSortableList);
  const dispatch = useDispatch();

  const [id, setId] = useState(sortableId);

  useEffect(() => {
    console.log(sortableList);
    dispatch(fetchSortableList(id));
  }, [id, dispatch]);
  return <div>sortable</div>;
};

export default ViewSortableListFragment;
