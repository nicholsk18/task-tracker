import React, { FunctionComponent, useEffect, useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { getObjectData, updateObject } from '../../app/fetchObjectData';
import Loading from '../../components/Loading';
import EditFields from './EditFields';

const EditObject: FunctionComponent = () => {
  const urlID = window.location.pathname.split('/').pop();
  const [object, setObject] = useState<any>();

  useEffect(() => {
    const loadObject = async () => {
      if (urlID) {
        const id = parseInt(urlID);
        setObject(await getObjectData(id));
      }
    };

    loadObject();
  }, [urlID]);

  if (!object) {
    return <Loading />;
  }

  function editObject(value: any, objectKey: any) {
    // key is better
    // after all it is the key in the object

    const newObject = { ...object };
    newObject[objectKey] = value;
    setObject(newObject);
  }

  function removeRelationship(objectKey: any, removedObject: any) {
    const tempObject = { ...object };

    const newRelObjects = tempObject[objectKey][0].objects.filter(
      (object: any) => object.id !== removedObject.id
    );

    tempObject[objectKey][0].objects = newRelObjects;
    setObject(tempObject);
  }

  function addRelationship(objectKey: any, newObject: any) {
    const tempObject = { ...object };
    // add relationship here
    console.log('add rel');
  }

  async function saveObject() {
    await updateObject(object);
  }

  return (
    <>
      <EditFields
        object={object}
        editObject={editObject}
        addRelationship={addRelationship}
        removeRelationship={removeRelationship}
      />

      <Box m={3}>
        <Button
          // href is temporary
          // otherwise on error its still redirect
          href={`/view/${object.id}`}
          variant='contained'
          color='primary'
          fullWidth={true}
          onClick={saveObject}
        >
          Save {object.type}
        </Button>
      </Box>
    </>
  );
};

export default EditObject;
