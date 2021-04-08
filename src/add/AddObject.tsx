import React, { useState } from 'react';
import {
  FormControl,
  Select,
  InputLabel,
  ListSubheader,
  MenuItem,
  Button,
  Box,
} from '@material-ui/core';
import SearchRelationship from '../components/SearchRelationship';
import BoxContainer from '../components/BoxContainer';
import RemoveRelationshipObjectFragment from '../view/fragments/RemoveRelationshipObjectFragment';
import Loading from '../components/Loading';

const AddObject = () => {
  const urlID = window.location.pathname.split('/').pop();
  const [object, setObject] = useState<any>(undefined);
  const [type, setType] = useState<any>('Activity');
  const [name, setName] = useState<any>('Swimming');

  if (!object) {
    // if its empty lets set it up as empty object
    // no need for template, it will get it once recreated from server
    const tempObject = {
      data: {
        id: 0,
        name: '',
        relationships: [],
        _id: 0,
      },
    };
    setObject(tempObject);

    return <Loading />;
  }

  // keeping this same
  // maybe we will be able to refactor to helper function
  function addRelationship(type: any, objID = 0, name = '', _id: 0) {
    const tempObject: any = { ...object };

    // only do this if its not new object
    if (objID !== 0) {
      const isDuplicate = tempObject.data.relationships.find(
        ({ id }: any) => id === objID
      );

      // no need add duplicate relationships
      if (isDuplicate) {
        alert('No need to duplicate');
        // need to clear box after this
        return;
      }

      tempObject.data.relationships.pop();
    }

    const newRelationship = {
      id: objID,
      type,
      name,
    };

    console.log(tempObject);
    tempObject.data.relationships.push(newRelationship);
    setObject(tempObject);
  }

  function removeRelationship(objectKey: string, removedObject: any) {
    const tempObject: any = { ...object };
    const relationships = tempObject.data[objectKey].filter(
      (relationshipObject: any) => relationshipObject.id !== removedObject.id
    );
    const { id, type, name, _id } = tempObject.data;

    // dont really like mutation but will work for now
    tempObject.data = { id, type, name, relationships, _id };
    setObject(tempObject);
  }

  return (
    <>
      <Box mx={4} my={2}>
        <FormControl style={{ width: '110px' }}>
          <InputLabel htmlFor='grouped-select'>Object Type</InputLabel>
          <Select defaultValue='' id='grouped-select'>
            <MenuItem
              value={1}
              // onClick={(e) => setType(e.target)} // does not work right now cause of mui
            >
              Activity
            </MenuItem>
            <MenuItem
              value={2}
              // onClick={(e) => setType(e.target)} // does not work right now cause of mui
            >
              Tag
            </MenuItem>
          </Select>
        </FormControl>

        <div style={{ padding: '10px 0' }}>
          <span>Object Name: </span>

          <input
            style={{ padding: '5px 10px' }}
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <BoxContainer>
          <p>Add Relationships</p>
          {object.data.relationships.map((relationship: any, id: number) => (
            <div key={id}>
              {/* are we adding or just showing relationships? */}
              {relationship.id === 0 ? (
                <SearchRelationship
                  relationshipType={type}
                  addRelationship={addRelationship}
                />
              ) : (
                <RemoveRelationshipObjectFragment
                  relationshipObject={relationship}
                  objectKey='relationships'
                  removeRelationship={removeRelationship}
                />
              )}
            </div>
          ))}

          <Box my={3}>
            <Button
              onClick={() => addRelationship('Activity', 0, '', 0)}
              variant='contained'
              color='primary'
            >
              Add Relationship
            </Button>
          </Box>
        </BoxContainer>

        <Box my={3}>
          <Button variant='contained' color='primary' fullWidth={true}>
            Save
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AddObject;
