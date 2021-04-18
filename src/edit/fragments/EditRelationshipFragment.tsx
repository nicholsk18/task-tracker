import React, { FunctionComponent } from 'react';
import RemoveRelationshipObjectFragment from '../RemoveRelationshipObjectFragment';
import SearchRelationship from '../../components/SearchRelationship';
import { Relationship } from '../../models/Relationship';

interface IProps {
  relationships: Relationship[];
  objectKey: string;
  removeRelationship: {
    (objectKey: string, removedObject: Relationship): void;
  };
  addRelationship: {
    (type: string, objectID: number, name: string, _id: string): void;
  };
}

const EditRelationshipFragment: FunctionComponent<IProps> = ({
  relationships,
  objectKey,
  removeRelationship,
  addRelationship,
}) => {
  return (
    <>
      {relationships.map((relationship: Relationship, index: number) => (
        <div key={index}>
          {relationship.id === 0 ? (
            <SearchRelationship
              relationshipType={relationship.type}
              addRelationship={addRelationship}
            />
          ) : (
            <RemoveRelationshipObjectFragment
              relationshipObject={relationship}
              objectKey={objectKey}
              removeRelationship={removeRelationship}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default EditRelationshipFragment;
