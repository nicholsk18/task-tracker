import React, { FunctionComponent } from 'react';
import ViewValueFragment from './ViewValueFragment';
import RemoveRelationshipObjectFragment from './RemoveRelationshipObjectFragment';

const EditRelationshipFragment: FunctionComponent<any> = ({ name, relationships }) => {
  return (
    <React.Fragment>
      <ViewValueFragment value={name} />
      {relationships.map((relationship: any, index: number) => (
        <div key={index}>
          <RemoveRelationshipObjectFragment relationship={relationship} />
        </div>
      ))}
    </React.Fragment>
  )
}

export default EditRelationshipFragment