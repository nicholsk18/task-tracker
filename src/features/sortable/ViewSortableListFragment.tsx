import React, { FunctionComponent, useEffect, useState } from 'react';
import ViewSortableListItem from './ViewSortableListItem';
import Loading from '../../components/Loading';
import { postSortableList } from '../../app/fetchData';

interface IProps {
  sortableIds: number[];
}

interface ISortableList {
  id: number;
  one: string;
  two: string;
}

const ViewSortableListFragment: FunctionComponent<IProps> = ({
  sortableIds,
}) => {
  const [sortableList, setSortableList] = useState<ISortableList[]>()

  useEffect(() => {
    const loadSortableList = async () => {
      setSortableList(await postSortableList(sortableIds))
    }

    loadSortableList()
  }, [])

  if(!sortableList) {
    return <Loading />
  }

  return (
    <>
      {sortableList.map((sortable: ISortableList) => (
          <div key={sortable.id}>
            <ViewSortableListItem sortable={sortable} />
          </div>
        ))}
    </>
  );
};

export default ViewSortableListFragment;
