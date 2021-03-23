import React, { FunctionComponent, useEffect, useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { getObjectData } from '../dataLayer/fetchData';
import { updateObject } from '../dataLayer/updateData';
import Loading from '../components/Loading';
import EditFields from './fragments/EditFields';
import { DataObject } from '../models/DataObject';
import { Relationship } from '../models/Relationship';

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

  // edit object could edit name relationship and remove relationship
  // or break it up to having editName editRelationship removeRelationships
  function editObject(
    value: string,
    objectKey: string,
    field: string,
    id: any
  ) {
    const newObject: any = { ...object };

    // has to be checked
    // new object have id of 0
    if (id !== undefined) {
      newObject[field][objectKey].map((relationshipObject: any) => {
        if (relationshipObject.id === id) {
          relationshipObject.name = value;
        }
      });
    } else {
      newObject[field][objectKey] = value;
    }
    setObject(newObject);
  }

  function removeRelationship(objectKey: string, removedObject: any) {
    const tempObject: any = { ...object };

    // return everything but the matched object
    const newObject = tempObject.relationships[objectKey].filter(
      (relationshipObject: any) => removedObject.id !== relationshipObject.id
    );
    // insert the change
    tempObject.relationships[objectKey] = newObject;
    setObject(tempObject);
  }

  // still need to add logic on server side
  // to save new relationship object
  function addRelationship(relationshipKey: any, id = 0, name = '') {
    const tempObject: any = { ...object };

    const newInputBox = { id: 0, name: '' };

    // filter out id 0 when adding a new exsiting object
    // might not work once I add new object
    tempObject.relationships[relationshipKey] = tempObject.relationships[
      relationshipKey
    ].filter((relationship: any) => relationship.id !== 0);
    tempObject.relationships[relationshipKey] = [
      ...tempObject.relationships[relationshipKey],
      { id, name },
    ];

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
