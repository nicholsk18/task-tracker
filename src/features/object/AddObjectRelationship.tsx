import React, { FunctionComponent } from 'react';
import SearchRelationship from '../../components/SearchRelationship';
import BoxContainer from '../../components/BoxContainer';

const AddObjectRelationship: FunctionComponent<any> = ({
  object,
  addRelationship,
}) => {
  return (
    <BoxContainer>
      <h2>Add {object.type} Relationship</h2>
      <SearchRelationship object={object} addRelationship={addRelationship} />
    </BoxContainer>
  );
};

export default AddObjectRelationship;
