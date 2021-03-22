import React, { FunctionComponent } from 'react';
import ViewRelationshipObjectFragment from './ViewRelationshipObjectFragment';
import { Relationships } from '../../models/Relationships';

interface IProps {
  relationships: Relationships[];
}
const ViewRelationshipFragment: FunctionComponent<any> = ({
  relationships,
}) => {
  return (
    <>
      {relationships.map((relationship: Relationships, index: number) => (
        <div key={index}>
          <ViewRelationshipObjectFragment relationshipObject={relationship} />
        </div>
      ))}
    </>
  );
};

export default ViewRelationshipFragment;
