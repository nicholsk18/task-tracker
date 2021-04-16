import React, { FunctionComponent } from 'react';
import ViewRelationshipObjectFragment from './ViewRelationshipObjectFragment';
import BoxContainer from '../../components/BoxContainer';
import { Box } from '@material-ui/core';
import { Relationship } from '../../models/Relationship';

interface IRelationships {
  relationships: Relationship[]
}

const ViewRelationshipFragment: FunctionComponent<IRelationships> = ({
  relationships,
}) => {

  return (
    <>
      {relationships.length > 0 ? (
        relationships.map((relationship: Relationship, index: number) => (
          <div key={index}>
            <ViewRelationshipObjectFragment relationship={relationship} />
          </div>

        ))
      ) : (
        <BoxContainer>
          <Box py={3}>No Relationships found</Box>
        </BoxContainer>
      )}
    </>
  );
};

export default ViewRelationshipFragment;
