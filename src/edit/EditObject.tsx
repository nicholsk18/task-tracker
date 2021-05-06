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
import EditRelationships from './fragments/EditRelationships';
import { useHistory } from 'react-router-dom';
import { deleteObjectById } from '../dataLayer/deleteData';
import { DataModal } from '../models/DataModal';
import { Relationship } from '../models/Relationship';
import ViewTypeFragment from '../view/fragments/ViewTypeFragment';

const EditObject: FunctionComponent = () => {
  const urlID = window.location.pathname.split('/').pop();
  const history = useHistory();

  const [object, setObject] = useState<any>();
  const [template, setTemplate] = useState<any>();
  const [type, setType] = useState<string>('Activity');

  const handleTypeChange = async (value: string) => {
    const newType = value;
    const template = await getTemplate(newType);

    const tempObj = { ...object };
    tempObj.type = newType;


    setType(newType);
    setTemplate(template);
    setObject(tempObj);
  };

  useEffect(() => {
    if (urlID) {
      const id = parseInt(urlID);
      if (id === 0) {
        (async () => {
          const { template, data } = await getNewObject(type);
          setObject(data);
          setType(data.type);
          setTemplate(template)
        })();
        return;
      }

      (async () => {
        const { template, data } = await getObjectData(id);
        setObject(data);
        setTemplate(template);
      })();
    }
  }, [urlID]);

  if (!object || !template) {
    return <Loading />;
  }

  // maybe editValues be better name?
  function editFields(
    value: string,
    objectKey: string,
    id: number // leaving for now in case need it later
  ) {
    const tempObject = { ...object };
    tempObject[objectKey] = value;
    setObject(tempObject);
  }

  function removeRelationship(removeType: string, removedObject: any) {
    let tempObject = { ...object };
    const relationships = tempObject.relationships.filter(
      (relationshipObject: any) => relationshipObject.id !== removedObject.id
    );
    const { id, type, name } = tempObject;

    // dont really like mutation but will work for now
    tempObject = { id, type, name, relationships };
    setObject(tempObject);
  }

  // still need to add logic on server side
  // to save new relationship object
  function addRelationship(type, objID = 0, name = '') {
    const tempObject = { ...object };

    // only do this if its not new object
    if (objID !== 0) {
      const isDuplicate = tempObject.relationships.find(
        ({ id }) => id === objID
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
      tempObject.relationships.pop();
    }
    const newRelationship = {
      id: objID,
      type,
      name,
    };

    tempObject.relationships.push(newRelationship);
    setObject(tempObject);
  }

  async function saveObject() {
    if (object.name === '') {
      // maybe a modal here?
      alert('Need a name');
      return;
    }

    // need error handling
    const obj = await updateObject(object);
    alert("save does not work till relationships are fix")
    // history.push(`/view/${obj.data.id}`);
  }

  async function deleteObject() {
    console.log(object);
    const status = await deleteObjectById(object.id);

    //   if (status.error) {
    //     alert(status.error);
    //     return;
    //   }
    //
    //   // redirect to next page
    //   // we will need to fix this later
    //   const newID = object.data.id + 1;
    //   history.push(`/view/${newID}`);
  }

  return (
    <>
      {/* show type your viewing */}
      <ViewTypeFragment value={`Edit ${object.type}`} />
      <hr />

      {object.id === 0 ? (
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
              onChange={(e) => handleTypeChange(e.target.value)}
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
        fields={template.fields}
        editFields={editFields}
      />

      <EditRelationships
        object={object}
        relationships={template.relationships}
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
          href={`/view/${object.id || 1}`}
          style={{ padding: '10px 40px' }}
          variant='contained'
          color='primary'
          fullWidth={false}
        >
          View {object.type}
        </Button>

        <Button
          style={{ padding: '10px 40px' }}
          variant='contained'
          color='primary'
          fullWidth={false}
          onClick={saveObject}
        >
          Save {object.type}
        </Button>
      </Box>

      {object.id !== 0 ? (
        <Box m={3}>
          <Button
            variant='contained'
            color='secondary'
            fullWidth={true}
            onClick={deleteObject}
          >
            Delete {object.type}
          </Button>
        </Box>
      ) : null}
    </>
  );
};

export default EditObject;
