import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import BoxContainer from '../../components/BoxContainer';
import ViewValueFragment from './ViewValueFragment';
import { Relationship } from '../../models/Relationship';

interface IRelationship {
  relationship: Relationship;
}

const ViewRelationshipObjectFragment: FunctionComponent<IRelationship> = ({
  relationship,
}) => {
  console.log(relationship);
  return (
    <BoxContainer>
      <Link to={`/view/${relationship.id}`}>
        <ViewValueFragment value={relationship.name} />
      </Link>
    </BoxContainer>
  );
};

export default ViewRelationshipObjectFragment;
