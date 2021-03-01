/* eslint-disable no-use-before-define */
import React, { FunctionComponent, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Loading from './Loading';
import { addRelationship, getRelationships } from '../app/fetchObjectData';
import { Data } from '../models/Data';

const filter = createFilterOptions();

interface IProps {
  relatesTo: number;
  type: string;
}

const SearchRelationship: FunctionComponent<IProps> = ({ relatesTo, type }) => {
  const history = useHistory();
  const [relationships, setRelationships] = useState<Data[]>();
  const [value, setValue] = useState<any>(null);
  const [createValue, setCreateValue] = useState<any>(null);

  useEffect(() => {
    const loadRelationships = async () => {
      setRelationships(await getRelationships(relatesTo, type));
    };

    loadRelationships();
  }, [type]);

  const save = async (data: any) => {
    const { id } = await addRelationship(data);
    history.push(`/edit/${id}`);
  };

  useEffect(() => {
    if (value) {
      console.log(value);
      const data = {
        relatesTo,
        rel: value,
      };

      save(data);
    }
  }, [value]);

  if (!relationships) {
    return <Loading />;
  }

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setCreateValue({
            id: newValue.id,
            name: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            name: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id='search-relationships'
      options={relationships}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.name;
      }}
      renderOption={(option) => option.name}
      style={{ width: 300, margin: '20px auto' }}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          label='Search Relationships'
          variant='outlined'
        />
      )}
    />
  );
};

export default SearchRelationship;
