import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSortableList, selectSortableList } from './sortableListSlice';
import ViewSortableListItem from './ViewSortableListItem';

interface IProps {
  sortableIds: [];
}

interface Sortable {
  id: number;
  one: string;
  two: string;
}

const ViewSortableListFragment: FunctionComponent<IProps> = ({
  sortableIds,
}) => {
  const sortableList = useSelector(selectSortableList);
  const dispatch = useDispatch();

  const [idList, setIdList] = useState(sortableIds);

  useEffect(() => {
    dispatch(fetchSortableList(idList));
  }, [idList, fetchSortableList]);

  return (
    <div>
      {sortableList.length > 0 &&
        sortableList.map((sortable: Sortable) => (
          <div key={sortable.id}>
            <ViewSortableListItem sortable={sortable} />
          </div>
        ))}
    </div>
  );
};

export default ViewSortableListFragment;
