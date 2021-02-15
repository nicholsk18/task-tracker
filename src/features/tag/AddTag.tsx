import React, { FunctionComponent, useEffect, useState } from 'react';
import { Box, Button, Card, TextField } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import { getAllActivities } from '../../app/fetchData';
import Loading from '../../components/Loading';
import { Activity } from '../../models/Activity';
import ViewActivityFragment from '../activity/ViewActivityFragment';

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

  function removeElement(event: any) {
    console.log(event);
  }

  const searchBoxStyle = {
    left:0,
    right:0,
    top: '-25px',
    borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    backgroundColor: '#f2f2f2',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px'
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
            style={{width: '100%'}}
            onChange={(event) => setText(event.target.value)}
          />

          <Box position='relative'>
            {search.length !== 0 && (
              <Box py={2} zIndex={1} position='absolute' style={searchBoxStyle}>
                {search.map((name, index) => (
                  <Box py={1} key={index}>
                    <Button fullWidth onClick={(event) => selectItem(event)}>
                      {name}
                    </Button>
                  </Box>
                ))}
              </Box>
            )}

            <Box my={3}>
              {(found.length !== 0 && (
                <Card variant='outlined'>
                  {found.map((item, index) => (
                    <Box my={3} display='flex' alignItems='center' key={index}>
                      <Box flexGrow={5} ml={3}>
                        <Card variant='outlined'>
                          <Box py={2}>{item}</Box>
                        </Card>
                      </Box>

                      <Box flexGrow={1}>
                        <Button
                          onClick={event => removeElement(event)}
                          size='large'
                          variant='contained'
                          color='secondary'
                        >
                          X
                        </Button>
                      </Box>
                    </Box>
                  ))}
                </Card>
              ))}
            </Box>
            <Button variant='contained' color='primary'>
              Add
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddTag;
