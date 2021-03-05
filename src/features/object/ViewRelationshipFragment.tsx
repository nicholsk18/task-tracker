import React, { FunctionComponent } from 'react';
import ViewValueFragment from './ViewValueFragment';
import ViewRelationshipObjectFragment from './ViewRelationshipObjectFragment';

const ViewRelationshipFragment: FunctionComponent<any> = ({
  relationships,
}) => {

  return (
    <React.Fragment>
      {/* from one hole in to another */}
      {/* ugly but the only way I can think of to gat dynamic relationship name */}
      <ViewValueFragment value={`${relationships[0].type}s`} />

      {relationships.map((relationship: any, index: number) => (
        <div key={index}>
          <ViewRelationshipObjectFragment object={relationship} />
        </div>
      ))}
    </React.Fragment>
  );
};

export default ViewRelationshipFragment;
