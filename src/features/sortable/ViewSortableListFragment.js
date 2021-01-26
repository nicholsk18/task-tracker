import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSortableList,
  selectSortableList,
  isLoading,
} from './sortableListSlice';

const ViewSortableListFragment = ({ sortableId }) => {
  const sortableList = useSelector(selectSortableList);
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();

  const [id, setId] = useState(sortableId);
  const [list, setList] = useState([]);

  useEffect(() => {
    dispatch(fetchSortableList(id));
  }, [id, dispatch]);

  if (loading === 'loaded') {
    console.log(sortableList);
  }

  useEffect(() => {
    setList(sortableList);
  }, [setList, sortableList]);

  return (
    <div>
      {/* call a sortable fragment here */}
      inside
      {list.length > 0 && <div>{/* {list[id].one} {list[id].two} */}</div>}
    </div>
  );
};

export default ViewSortableListFragment;
