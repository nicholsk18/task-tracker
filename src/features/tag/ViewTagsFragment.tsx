import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Card } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags, selectTags } from './tagSlice';

interface IProps {
  tagIds: number[];
}

interface Tag {
  id: number;
  name: string;
}

const ViewTagsFragment: FunctionComponent<IProps> = ({ tagIds }) => {
  const getTags = useSelector(selectTags);
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);

  useEffect(() => {
    dispatch(fetchTags(tagIds));
  }, [dispatch, tagIds]);

  useEffect(() => {
    setTags(getTags);
  }, [setTags, getTags]);

  return (
    <Box m={2}>
      <h2>Tags</h2>
      {tags.map((tag: Tag) => (
        <Box my={3} key={tag.id}>
          <Link to={`/view/tag/${tag.id}`}>
            <Card variant='outlined'>
              <Box py={3}>{tag.name}</Box>
            </Card>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default ViewTagsFragment;
