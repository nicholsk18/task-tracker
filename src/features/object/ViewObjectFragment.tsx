import React, { FunctionComponent } from 'react';
import { Relationship } from '../../models/Relationship';

type Relationships = {
  relationship: Relationship;
};

const ViewObjectFragment: FunctionComponent<Relationships> = ({
  relationship,
}) => {
  return <h4>{relationship.data.name}</h4>;
};

export default ViewObjectFragment;
