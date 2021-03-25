import React, { FunctionComponent } from 'react';
import ViewRelationshipObjectFragment from './ViewRelationshipObjectFragment';
import { Relationships } from '../../models/Relationships';
import BoxContainer from '../../components/BoxContainer';
import { Box } from '@material-ui/core';

interface IProps {
  relationships: Relationships[];
}
const ViewRelationshipFragment: FunctionComponent<any> = ({
  relationships,
}) => {
  return (
    <>
      {relationships.length > 0 ? (
        relationships.map((relationship: Relationships, index: number) => (
          <div key={index}>
            <ViewRelationshipObjectFragment relationshipObject={relationship} />
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
