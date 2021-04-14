import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import {
  getNewObject,
  getObjectData,
  getTemplate,
} from '../dataLayer/fetchData';
import { updateObject } from '../dataLayer/updateData';
import Loading from '../components/Loading';
import EditFields from './fragments/EditFields';
import ViewValueFragment from '../view/fragments/ViewValueFragment';
import { useHistory } from 'react-router-dom';
import { deleteObjectById } from '../dataLayer/deleteData';

const EditObject: FunctionComponent = () => {
  const urlID = window.location.pathname.split('/').pop();
  const history = useHistory();

  const [object, setObject] = useState<any>();
  const [type, setType] = useState<any>('Activity');

  const handleChange = async (event: any) => {
    const newType = event.target.value;
    setType(newType);
    const template = await getTemplate(newType);
    // have to update the relationships we can add

    const tempObj = { ...object };
    tempObj.data.type = newType;
    tempObj.Template = template;
    setObject(tempObj);
  };

  useEffect(() => {
    if (urlID) {
      const id = parseInt(urlID);
      if (id === 0) {
        (async () => {
          const objectData = await getNewObject(type);
          setObject(objectData);
          setType(objectData.data.type);
        })();
        return;
      }

      (async () => {
        setObject(await getObjectData(id));
      })();
    }
  }, [urlID]);

  if (!object) {
    return <Loading />;
  }

  // edit object could edit name relationship and remove relationship
  // or break it up to having editName editRelationship removeRelationships
  function editObject(
    value: string,
    objectKey: string,
    id: any // leaving for now in case need it later
  ) {
    const newObject: any = { ...object };
    newObject.data[objectKey] = value;
    setObject(newObject);
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

  // still need to add logic on server side
  // to save new relationship object
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

      // now that we know what relationship user wanted
      // remove the last relationship object
      // it should always be 0
      tempObject.data.relationships.pop();
    }

    const newRelationship = {
      id: objID,
      type,
      name,
    };

    tempObject.data.relationships.push(newRelationship);
    setObject(tempObject);
  }

  async function saveObject() {
    if (object.data.name === '') {
      // maybe a modal here?
      alert('Need a name');
      return;
    }

    // need error handling
    const obj = await updateObject(object);
    history.push(`/view/${obj.data.id}`);
  }

  async function deleteObject() {
    const status = await deleteObjectById(object.data._id);

    if (status.error) {
      alert(status.error);
      return;
    }

    // redirect to next page
    // we will need to fix this later
    const newID = object.data.id + 1;
    history.push(`/view/${newID}`);
  }

  return (
    <>
      {/* show type your viewing */}
      <ViewValueFragment value={`Edit ${type}`} />
      <hr />

      {object.data.id === 0 ? (
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
      ) : null}

      <EditFields
        object={object}
        editObject={editObject}
        addRelationship={addRelationship}
        removeRelationship={removeRelationship}
      />

      <Box
        m={3}
        display='flex'
        flexDirection='row'
        justifyContent='space-around'
      >
        <Button
          href={`/view/${object.data.id}`}
          style={{ padding: '10px 40px' }}
          variant='contained'
          color='primary'
          fullWidth={false}
        >
          View {object.data.type}
        </Button>

        <Button
          style={{ padding: '10px 40px' }}
          variant='contained'
          color='primary'
          fullWidth={false}
          onClick={saveObject}
        >
          Save {object.data.type}
        </Button>
      </Box>

      {object.data.id !== 0 ? (
        <Box m={3}>
          <Button
            variant='contained'
            color='secondary'
            fullWidth={true}
            onClick={deleteObject}
          >
            Delete {object.data.type}
          </Button>
        </Box>
      ) : null}
    </>
  );
};

export default EditObject;
