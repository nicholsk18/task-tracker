import React, { FunctionComponent, useEffect, useState } from 'react';
import { getObjectData } from '../../app/fetchObjectData';
import Loading from '../../components/Loading';
import MapObject from './MapObject';
import ButtonContainer from '../../components/ButtonContainer';

const ViewObject: FunctionComponent = () => {
  // would all this go in to menu component
  // that calls ViewObject and passes in that object?
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

  return (
    <React.Fragment>
      {/* its not pretty but works out better when mapping */}
      {/* fields might be a bad prop name but helps to map over different things */}
      {/* object.fields object.relationships and object.references or anything else we add */}
      <MapObject object={object} fields={object.fields} />
      <MapObject object={object} fields={object.relationships} />

      <ButtonContainer to={`/edit/${object.id}`} fullWidth={true}>
        Edit {object.type}
      </ButtonContainer>
    </React.Fragment>
  );
};

export default ViewObject;
