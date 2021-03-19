import React, { FunctionComponent } from 'react';
import ViewValueFragment from './ViewValueFragment';
import ViewRelationshipObjectFragment from './ViewRelationshipObjectFragment';
import { Relationships } from '../../models/Relationships';

interface IProps {
  relationships: Relationships[];
}
const ViewRelationshipFragment: FunctionComponent<IProps> = ({
  relationships,
}) => {
  return (
    <>
      {relationships.map((relationship: Relationships, index: number) => (
        <div key={index}>
          <ViewValueFragment value={relationship.to} />

          <ViewRelationshipObjectFragment objects={relationship.objects} />
        </div>
      ))}
    </>
  );
};

export default ViewRelationshipFragment;
