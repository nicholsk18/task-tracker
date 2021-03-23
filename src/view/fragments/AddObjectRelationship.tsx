import React, { FunctionComponent } from 'react';
import SearchRelationship from '../../components/SearchRelationship';
import BoxContainer from '../../components/BoxContainer';
import { DataObject } from '../../models/DataObject';
import { Relationship } from '../../models/Relationship';

interface IProps {
  object: DataObject;
  addRelationship: { (newRelationship: Relationship): void };
}

const AddObjectRelationship: FunctionComponent<any> = ({
  object,
  relationshipType,
}) => {
  return (
    <BoxContainer>
      <SearchRelationship object={object} addRelationship={relationshipType} />
    </BoxContainer>
  );
};

export default AddObjectRelationship;
