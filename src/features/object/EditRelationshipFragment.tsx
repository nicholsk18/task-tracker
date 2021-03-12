import React, { FunctionComponent } from 'react';
import ViewValueFragment from './ViewValueFragment';
import RemoveRelationshipObjectFragment from './RemoveRelationshipObjectFragment';

const EditRelationshipFragment: FunctionComponent<any> = ({
  relationships,
  objectKey,
  removeRelationship,
}) => {
  return (
    <>
      {relationships.map((relationship: any, index: number) => (
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
