/* eslint-disable no-use-before-define */
import React, { FunctionComponent, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { Redirect } from 'react-router-dom';

const filter = createFilterOptions();

interface IProps {
  name: string;
  relationships: any[];
}

const SearchRelationship: FunctionComponent<IProps> = ({
  name,
  relationships,
}) => {
  const [value, setValue] = useState<{ name: string }>({ name: '' });
  const [addNew, setAddNew] = useState(false);

  if (addNew) {
    return <Redirect to='/' />;
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
          // if adding new redirect to new place
          setAddNew(true);
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
      style={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          label='Free solo with text demo'
          variant='outlined'
        />
      )}
    />
  );
};

export default SearchRelationship;
