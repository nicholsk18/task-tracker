import React, { FunctionComponent, useEffect, useState } from 'react';
import { getObjectData } from '../dataLayer/fetchData';
import Loading from '../components/Loading';
import ButtonContainer from '../components/ButtonContainer';
import ViewFields from './fragments/ViewFields';
import ViewRelationships from './fragments/ViewRelationships';
import ViewTypeFragment from './fragments/ViewTypeFragment';

const ViewObject: FunctionComponent = () => {
  const urlID = window.location.pathname.split('/').pop();
  const [object, setObject] = useState<any>();
  const [template, setTemplate] = useState<any>();

  useEffect(() => {
    if (urlID) {
      // maybe better than before
      (async () => {
        const id = parseInt(urlID);
        const { template, data } = await getObjectData(id);
        setObject(data);
        setTemplate(template);
      })();
    }
  }, [urlID]);

  if (!object || !template) {
    return <Loading />;
  }

  return (
    <>
      {/* I feel like this needs to be its own thing */}
      <ViewTypeFragment value={`View ${object.type}`} />
      <hr />

      {/* here we can also just pass template.fields */}
      <ViewFields object={object} template={template} />
      {/* and template.relationships */}
      <ViewRelationships object={object} template={template} />

      <ButtonContainer to={`/edit/${object.id}`} fullWidth={true}>
        Edit {object.type}
      </ButtonContainer>

      <ButtonContainer to={`/edit/0`} fullWidth={true}>
        Create New Object
      </ButtonContainer>
    </>
  );
};

export default ViewObject;
