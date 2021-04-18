import React, { FunctionComponent, useEffect, useState } from 'react';
import { getObjectData } from '../dataLayer/fetchData';
import Loading from '../components/Loading';
import ButtonContainer from '../components/ButtonContainer';
import ViewFields from './fragments/ViewFields';
import ViewValueFragment from './fragments/ViewValueFragment';
import { DataModal } from '../models/DataModal';
import ViewTypeFragment from './fragments/ViewTypeFragment';

const ViewObject: FunctionComponent = () => {
  const urlID = window.location.pathname.split('/').pop();
  const [object, setObject] = useState<DataModal>();

  useEffect(() => {
    if (urlID) {
      // maybe better than before
      (async () => {
        const id = parseInt(urlID);
        setObject(await getObjectData(id));
      })();
    }
  }, [urlID]);

  if (!object) {
    return <Loading />;
  }

  return (
    <>
      {/* show type your viewing */}
      <ViewTypeFragment value={`View ${object.data.type}`} />
      <hr />

      <ViewFields object={object} />

      <ButtonContainer to={`/edit/${object.data.id}`} fullWidth={true}>
        Edit {object.data.type}
      </ButtonContainer>

      <ButtonContainer to={`/edit/0`} fullWidth={true}>
        Create New Object
      </ButtonContainer>
    </>
  );
};

export default ViewObject;
