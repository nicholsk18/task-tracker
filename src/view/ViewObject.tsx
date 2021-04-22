import React, { FunctionComponent, useEffect, useState } from 'react';
import { getObjectData } from '../dataLayer/fetchData';
import Loading from '../components/Loading';
import ButtonContainer from '../components/ButtonContainer';
import ViewFields from './fragments/ViewFields';
import { DataModal } from '../models/DataModal';
import BoxContainer from '../components/BoxContainer';
import ViewRelationships from './fragments/ViewRelationships';

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
      {/* we could make this switch component or something? */}
      {object.Template.fields.map((objectKey: string, index: number) => {
        if (typeof object.data[objectKey] === 'string') {
          return (
            <BoxContainer key={index}>
              <ViewFields object={object} objectKey={objectKey}/>
            </BoxContainer>
          );
        }

        if (typeof object.data[objectKey] === 'object') {
          return (
            <BoxContainer key={index}>
              <ViewRelationships object={object} objectKey={objectKey} />
            </BoxContainer>
          );
        }
        // other if() checks for any other fields data we add later
      })}

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
