import React, { FunctionComponent, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import { getObjectData, updateObject } from '../../app/fetchObjectData';
import Loading from '../../components/Loading';
import { DataObject } from '../../models/DataObject';
import EditFields from './EditFields';
import ButtonContainer from '../../components/ButtonContainer';

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

  //okay I'm doing this horribly
  //but you get the idea?
  function editObject(value: any, field: any) {
    const newObject = { ...object };
    newObject[field] = value;
    setObject(newObject);
  }

  async function saveObject() {
    const test = await updateObject(object);
  }

  return (
    <>
      <EditFields object={object} editObject={editObject} />

      <Box m={3}>
        <Button
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
