import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
} from '@material-ui/core';
import { createNewObject } from '../dataLayer/updateData';
import { useHistory } from 'react-router-dom';

const AddObject = () => {
  const [type, setType] = useState('Activity');
  const history = useHistory();

  const handleChange = (event: any) => {
    setType(event.target.value);
  };

  const createObject: any = () => {
    (async () => {
      const object = {
        id: 0,
        name: '',
        type,
      };

      const { id } = await createNewObject(object);
      history.push(`/edit/${id}`);
    })();
  };

  return (
    <>
      <Box mx={4} my={2}>
        <Box>
          <h2>Pick Object Type</h2>
        </Box>

        <FormControl component='fieldset'>
          <FormLabel component='legend'>type</FormLabel>
          <RadioGroup
            aria-label='gender'
            name='gender1'
            value={type}
            onChange={handleChange}
          >
            <FormControlLabel
              value='Activity'
              control={<Radio />}
              label='Activity'
            />
            <FormControlLabel value='Tag' control={<Radio />} label='Tag' />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box m={3}>
        <Button
          variant='contained'
          color='primary'
          fullWidth={true}
          onClick={createObject}
        >
          Next
        </Button>
      </Box>
    </>
  );
};

export default AddObject;
