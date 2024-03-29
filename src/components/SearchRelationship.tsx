/* eslint-disable no-use-before-define */
import React, { FunctionComponent, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import Loading from './Loading';
import { getRelationships } from '../dataLayer/fetchData';
import { createNewObject } from '../dataLayer/updateData';
import { Relationship } from '../models/Relationship';

const filter = createFilterOptions();

interface IProps {
  relationshipType: string;
  addRelationship: {
    (type: string, objectID: number, name: string, _id: string): void;
  };
}
const SearchRelationship: FunctionComponent<IProps> = ({
  relationshipType,
  addRelationship,
}) => {
  const [relationships, setRelationships] = useState<Relationship[]>();
  const [value, setValue] = useState<Relationship | null>(null);
  // will be used when I add ability to create a new relationship
  const [createValue, setCreateValue] = useState<any>(null);

  useEffect(() => {
    const loadRelationships = async () => {
      setRelationships(await getRelationships(relationshipType));
    };

    loadRelationships();
  }, []);

  useEffect(() => {
    if (value) {
      addRelationship(relationshipType, value.id, value.name, value._id);
    }
  }, [value]);

  useEffect(() => {
    if (createValue) {
      const createObject = async () => {
        const { id, type, name, _id } = await createNewObject(createValue);
        addRelationship(type, id, name, _id);
      };

      createObject();
    }
  }, [createValue]);

  if (!relationships) {
    return <Loading />;
  }

  return (
    <Autocomplete
      value={value}
      // this any will change once I finish with the create new relationship
      onChange={(event, newValue: any) => {
        if (typeof newValue === 'string') {
          setValue({
            id: 0,
            name: newValue,
            type: '',
            _id: '',
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setCreateValue({
            id: newValue.id,
            name: newValue.inputValue,
            type: newValue.type,
            _id: '',
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
            id: 0,
            type: relationships[0].type,
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
