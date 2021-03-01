import React, { FunctionComponent } from 'react';
import { Relationship } from '../../models/Relationship';
import { Link } from 'react-router-dom';
import BoxContainer from '../../components/BoxContainer';

type Relationships = {
  relationship: Relationship;
};

const ViewObjectFragment: FunctionComponent<Relationships> = ({
  relationship,
}) => {
  return (
    <BoxContainer>
      <Link to={`/view/${relationship.id}`}>
        <h4>{relationship.data.name}</h4>
      </Link>
    </BoxContainer>
  );
};

export default ViewObjectFragment;
