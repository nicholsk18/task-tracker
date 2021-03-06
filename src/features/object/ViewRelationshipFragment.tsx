import React, { FunctionComponent } from 'react';
import ViewValueFragment from './ViewValueFragment';
import ViewRelationshipObjectFragment from './ViewRelationshipObjectFragment';

const ViewRelationshipFragment: FunctionComponent<any> = ({
  relationships,
}) => {
  return (
    <>
      {relationships.map((relationship: any, index: number) => (
        <div key={index}>
          <ViewValueFragment value={relationship.to} />

          <ViewRelationshipObjectFragment objects={relationship.objects} />
        </div>
      ))}
    </>
  );
};

export default ViewRelationshipFragment;
