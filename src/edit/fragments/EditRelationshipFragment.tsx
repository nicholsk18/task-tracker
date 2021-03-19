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

const EditRelationshipFragment: FunctionComponent<IProps> = ({
  relationships,
  objectKey,
  removeRelationship,
}) => {
  return (
    <>
      {relationships.map((relationship: Relationships, index: number) => (
        <div key={index}>
          <ViewValueFragment value={relationship.to} />

          <RemoveRelationshipObjectFragment
            objects={relationship.objects}
            objectKey={objectKey}
            removeRelationship={removeRelationship}
          />
        </div>
      ))}
    </>
  );
};

export default EditRelationshipFragment;