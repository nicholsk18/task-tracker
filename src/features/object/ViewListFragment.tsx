import React, { FunctionComponent } from 'react';
import { Relationship } from '../../models/Relationship';
import BoxContainer from '../../components/BoxContainer';
import ViewObjectFragment from './ViewObjectFragment';
import { Box } from '@material-ui/core';

type IRelationship = {
  relationships: [Relationship];
};

const ViewListFragment: FunctionComponent<IRelationship> = ({
  relationships,
}) => {
  return (
    <BoxContainer>
      <h3>{relationships[0].type}</h3>
      {relationships[0].data ? (
        relationships.map((relationship, index) => (
          <ViewObjectFragment relationship={relationship} key={index} />
        ))
      ) : (
        <Box my={3}>No Relationships</Box>
      )}
    </BoxContainer>
  );
};

export default ViewListFragment;
