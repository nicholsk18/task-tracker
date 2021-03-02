import React, { FunctionComponent, useEffect, useState } from 'react';
import { getObjectData } from '../../app/fetchObjectData';
import Loading from '../../components/Loading';
import { DataObject } from '../../models/DataObject';
import BoxContainer from '../../components/BoxContainer';
import ButtonContainer from '../../components/ButtonContainer';
import ViewListFragment from './ViewListFragment';

const ViewObject: FunctionComponent = () => {
  const urlID = window.location.pathname.split('/').pop();
  const [object, setObject] = useState<DataObject>();

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
  console.log(object)

  return (
    <React.Fragment>
      {/* Can be removed later */}
      <h2>View {object.type} Screen</h2>
      <BoxContainer>
        <h3>{object.data.name}</h3>
      </BoxContainer>

      <ViewListFragment relationships={object.relationships} />

      <ButtonContainer to={`/edit/${object.id}`} fullWidth={true}>
        Edit {object.type}
      </ButtonContainer>
    </React.Fragment>
  );
};

export default ViewObject;
