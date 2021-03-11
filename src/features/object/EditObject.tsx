import React, { FunctionComponent, useEffect, useState } from 'react';
import { getObjectData } from '../../app/fetchObjectData';
import Loading from '../../components/Loading';
import { DataObject } from '../../models/DataObject';
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

  function handleChange(newState: DataObject) {
    setObject(newState);
  }
  
  //okay I'm doing this horribly
  //but you get the idea?
  function editObject(value: any, field: any) {
    const newObject = {...object};
    newObject[field] = value;
    setObject(newObject);
  }

  return (
    <>
      <EditFields object={object} editObject={editObject}/>
    </>
  );
};

export default EditObject;
