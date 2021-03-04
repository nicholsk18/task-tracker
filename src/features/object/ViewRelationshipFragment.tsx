import React, { FunctionComponent } from 'react';
import ViewValueFragment from './ViewValueFragment';
import ViewRelationshipObjectFragment from './ViewRelationshipObjectFragment';

const ViewRelationshipFragment: FunctionComponent<any> = ({
  name,
  relationships,
}) => {
  return (
    <React.Fragment>
      <ViewValueFragment value={name} />
      {relationships.map((relationship: any, index: number) => (
        <div key={index}>
          <ViewRelationshipObjectFragment relationship={relationship} />
        </div>
      ))}
    </React.Fragment>
  );
};

export default ViewRelationshipFragment;
