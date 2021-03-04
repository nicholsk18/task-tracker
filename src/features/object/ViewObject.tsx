import React, { FunctionComponent, useEffect, useState } from 'react';
import { getObjectData } from '../../app/fetchObjectData';
import Loading from '../../components/Loading';
import MapObject from './MapObject';

const ViewObject: FunctionComponent = () => {
  const urlID = window.location.pathname.split('/').pop();
  const [object, setObject] = useState<any>();

  useEffect(() => {
    const loadObject = async () => {
      // make sure urlID exists before parsing and fetching
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

  return (
    <React.Fragment>
      <MapObject object={object} fields={object.fields} />
      <MapObject object={object} fields={object.relationships} />
    </React.Fragment>
  );
};

export default ViewObject;
