import React, { FunctionComponent } from 'react';
import { Box, Button } from '@material-ui/core';
import BoxContainer from '../../components/BoxContainer';
import ViewValueFragment from './ViewValueFragment';
import { Relationship } from '../../models/Relationship';

interface IProps {
  relationshipObject: Relationship,
  objectKey: string;
  removeRelationship: {
    (objectKey: string, removedObject: Relationship): void;
  };
}

const RemoveRelationshipObjectFragment: FunctionComponent<IProps> = ({
  relationshipObject,
  objectKey,
  removeRelationship,
}) => {
  return (
    <>
      <BoxContainer>
        <Box
          px={3}
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <ViewValueFragment value={relationshipObject.name} />

          <Button
            size='large'
            variant='contained'
            color='secondary'
            onClick={() => removeRelationship(objectKey, relationshipObject)}
          >
            X
          </Button>
        </Box>
      </BoxContainer>
    </>
  );
};

export default RemoveRelationshipObjectFragment;
