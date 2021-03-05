import React, { FunctionComponent, useEffect, useState } from 'react';
import { getObjectData } from '../../app/fetchObjectData';
import Loading from '../../components/Loading';
import { DataObject } from '../../models/DataObject';
import MapEditObject from './MapEditObject';

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

  return (
    <React.Fragment>
      <MapEditObject object={object} fields={object.fields} />
      <MapEditObject object={object} fields={object.relationships} />
    </React.Fragment>
  );
};

export default EditObject;
