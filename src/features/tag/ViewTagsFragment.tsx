import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Card } from '@material-ui/core';
import Loading from '../../components/Loading';
import { postTags } from '../../app/fetchData';

interface IProps {
  tagIds: number[];
}

interface ITagList {
  id: number;
  name: string;
  activityIds: number[];
}

const ViewTagsFragment: FunctionComponent<IProps> = ({ tagIds }) => {
  const [tagsList, setTagsList] = useState<ITagList[]>();

  useEffect(() => {
    const loadTagsList = async () => {
      setTagsList(await postTags(tagIds));
    };

    loadTagsList();
  }, []);

  if (!tagsList) {
    return <Loading />;
  }

  return (
    <Box m={2}>
      <h2>Tags</h2>
      {tagsList.map((tag: ITagList) => (
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
