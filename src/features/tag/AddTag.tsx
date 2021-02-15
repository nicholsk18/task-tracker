import React, { FunctionComponent, useEffect, useState } from 'react';
import { Box, Button, Card, TextField } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { getAllActivities } from '../../app/fetchData';
import Loading from '../../components/Loading';
import { Activity } from '../../models/Activity';

interface IUseParams {
  id: string;
}

const AddTag: FunctionComponent = () => {
  const [params, setParams] = useState<IUseParams>(useParams());
  const [text, setText] = useState('');
  const [allActivities, setAllActivities] = useState<Activity[]>();
  const [search, setSearch] = useState<string[]>([]);
  const [found, setFound] = useState<string[]>([]);

  useEffect(() => {
    const loadAllActivities = async () => {
      setAllActivities(await getAllActivities());
    };

    loadAllActivities();
  }, [setAllActivities]);

  useEffect(() => {
    if (allActivities) {
      const lowercaseText = text.toLowerCase();
      const found: string[] = [];

      allActivities.map((activity) => {
        const name = activity.name.toLowerCase();

        if (name.startsWith(lowercaseText) && lowercaseText !== '') {
          found.push(name);
        } else {
          setSearch([]);
        }
        setSearch(found);
      });
    }
  }, [text]);

  function selectItem(event: any) {
    const item = event.target.innerText;
    const doesContain = found.includes(item);
    if (!doesContain) {
      setFound([...found, item]);
    }
  }

  if (!allActivities) {
    return <Loading />;
  }

  return (
    <Box mx={5}>
      <h2>Add Tag</h2>
      <Box my={3}>
        <form action=''>
          <TextField
            label='Search for Activity'
            type='search'
            variant='outlined'
            onChange={(event) => setText(event.target.value)}
          />
          <Box my={3}>
            {found.length !== 0 &&
              found.map((item, index) => (
                <Box mx={5} my={3} key={index}>
                  <Card variant='outlined'>
                    <Box py={3}>{item}</Box>
                  </Card>
                </Box>
              ))}
            <Button variant='contained' color='primary'>
              Add
            </Button>
          </Box>
        </form>
      </Box>
      {search.map((name, index) => (
        <div key={index} onClick={(event) => selectItem(event)}>
          {name}
        </div>
      ))}
    </Box>
  );
};

export default AddTag;
