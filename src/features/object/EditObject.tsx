import React, { FunctionComponent, useEffect, useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { getObjectData, updateObject } from '../../app/fetchObjectData';
import Loading from '../../components/Loading';
import EditFields from './EditFields';
import { DataObject } from '../../models/DataObject';
import { Relationship } from '../../models/Relationship';

const EditObject: FunctionComponent = () => {
  const urlID = window.location.pathname.split('/').pop();
  const [object, setObject] = useState<DataObject>();

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

  function editObject(value: string, objectKey: string) {
    // key is better
    // after all it is the key in the object

    const newObject: any = { ...object };
    newObject[objectKey] = value;
    setObject(newObject);
  }

  function removeRelationship(objectKey: string, removedObject: Relationship) {
    const tempObject: any = { ...object };

    const newRelObjects = tempObject[objectKey][0].objects.filter(
      (object: any) => object.id !== removedObject.id
    );

    tempObject[objectKey][0].objects = newRelObjects;
    setObject(tempObject);
  }

  function addRelationship(newRelationship: string) {
    const tempObject: any = { ...object };

    tempObject['Relationships'][0].objects.push(newRelationship);
    setObject(tempObject);
  }

  async function saveObject() {
    if (object) {
      await updateObject(object);
    }
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
          // href={`/view/${object.id}`}
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
