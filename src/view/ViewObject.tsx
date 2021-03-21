import React, { FunctionComponent, useEffect, useState } from 'react';
import { getObjectData } from '../dataLayer/fetchData';
import Loading from '../components/Loading';
import ButtonContainer from '../components/ButtonContainer';
import ViewFields from './fragments/ViewFields';

const ViewObject: FunctionComponent = () => {
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
    <>
      <ViewFields object={object} />

      <ButtonContainer to={`/edit/${object.id}`} fullWidth={true}>
        Edit {object.type}
      </ButtonContainer>
    </>
  );
};

export default ViewObject;
