import React, { FunctionComponent } from 'react';
import ViewRelationshipObjectFragment from './ViewRelationshipObjectFragment';
import BoxContainer from '../../components/BoxContainer';
import { Box } from '@material-ui/core';
import { Relationship } from '../../models/Relationship';

interface IRelationships {
  relationships: Relationship[];
}

const ViewRelationshipFragment: FunctionComponent<IRelationships> = ({
  relationships,
}) => {
  if (relationships.length === 0) {
    // make this in special component
    return (
      <BoxContainer>
        <Box py={3}>No Relationships found</Box>
      </BoxContainer>
    )
  }
  return (
    <>
      {relationships.map((relationship: Relationship, index: number) => (
          <div key={index}>
            <ViewRelationshipObjectFragment relationship={relationship} />
          </div>
        ))}
    </>
  );
};

export default ViewRelationshipFragment;
