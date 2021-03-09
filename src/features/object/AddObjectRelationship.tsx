import React, { FunctionComponent, useEffect, useState } from 'react';
import { DataObject } from '../../models/DataObject';
import { getObjectData } from '../../app/fetchObjectData';
import Loading from '../../components/Loading';
import SearchRelationship from '../../components/SearchRelationship';
import BoxContainer from '../../components/BoxContainer';
import ViewFields from './ViewFields';

const AddObjectRelationship: FunctionComponent = () => {
  const urlID = window.location.pathname.split('/').pop();
  const [object, setObject] = useState<DataObject>();

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
    <BoxContainer>
      {/*<h2>Add {object.type} Relationship</h2>*/}
      <SearchRelationship
        object={object}
      />
    </BoxContainer>
  );
};

export default AddObjectRelationship;
