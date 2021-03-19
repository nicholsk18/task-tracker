import React, { FunctionComponent } from 'react';
import SearchRelationship from '../../components/SearchRelationship';
import BoxContainer from '../../components/BoxContainer';
import { DataObject } from '../../models/DataObject';
import { Relationship } from '../../models/Relationship';

interface IProps {
  object: DataObject;
  addRelationship: { (newRelationship: Relationship): void };
}

const AddObjectRelationship: FunctionComponent<IProps> = ({
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
