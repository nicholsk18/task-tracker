import React, { FunctionComponent } from 'react';
import ViewValueFragment from '../../view/fragments/ViewValueFragment';
import RemoveRelationshipObjectFragment from '../../view/fragments/RemoveRelationshipObjectFragment';
import { Relationships } from '../../models/Relationships';
import { Relationship } from '../../models/Relationship';

interface IProps {
  relationships: Relationships[];
  objectKey: string;
  removeRelationship: { (objectKey: string, removeObject: Relationship): void };
}

const EditRelationshipFragment: FunctionComponent<any> = ({
  relationships,
  objectKey,
  removeRelationship,
  editObject,
  field,
}) => {
  return (
    <>
      {relationships.map((relationship: Relationships, index: number) => (
        <div key={index}>
          <RemoveRelationshipObjectFragment
            relationshipObject={relationship}
            objectKey={objectKey}
            removeRelationship={removeRelationship}
            editObject={editObject}
            field={field}
          />
        </div>
      ))}
    </>
  );
};

export default EditRelationshipFragment;
