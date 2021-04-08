import React, { FunctionComponent } from 'react';
import RemoveRelationshipObjectFragment from '../../view/fragments/RemoveRelationshipObjectFragment';
import { Relationships } from '../../models/Relationships';
import { Relationship } from '../../models/Relationship';
import SearchRelationship from '../../components/SearchRelationship';

interface IProps {
  relationships: Relationships[];
  objectKey: string;
  removeRelationship: { (objectKey: string, removeObject: Relationship): void };
}

const EditRelationshipFragment: FunctionComponent<any> = ({
  relationships,
  objectKey,
  removeRelationship,
  addRelationship,
}) => {
  return (
    <>
      {relationships.map((relationship: any, index: number) => (
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
