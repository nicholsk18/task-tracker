import React, { FunctionComponent, useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import ViewTagFragment from './ViewTagFragment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags, selectTags } from './tagSlice';

interface IProps {
  tagIds: [];
}

interface Tag {
  id: number;
  name: string;
}

const ViewTagsFragment: FunctionComponent<IProps> = ({ tagIds }) => {
  const tags = useSelector(selectTags);
  const dispatch = useDispatch();
  const [tagIdList, setTagIdList] = useState(tagIds);

  useEffect(() => {
    dispatch(fetchTags(tagIdList));
  }, [dispatch, tagIdList]);

  return (
    <Box m={2}>
      <h2>Tags</h2>
      {tags.map((tag: Tag) => (
        <div key={tag.id}>
          <ViewTagFragment tag={tag} />
        </div>
      ))}
    </Box>
  );
};

export default ViewTagsFragment;
