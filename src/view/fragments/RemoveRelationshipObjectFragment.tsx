import React, { FunctionComponent } from 'react';
import { Box, Button } from '@material-ui/core';
import BoxContainer from '../../components/BoxContainer';
import ViewValueFragment from './ViewValueFragment';
import { Relationship } from '../../models/Relationship';
import EditValueFragment from '../../edit/fragments/EditValueFragment';

interface IProps {
  objects: Relationship[];
  objectKey: string;
  removeRelationship: {
    (objectKey: string, removedObject: Relationship): void;
  };
}

const RemoveRelationshipObjectFragment: FunctionComponent<any> = ({
  relationshipObject,
  objectKey,
  removeRelationship,
  editObject,
  field,
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
          <EditValueFragment
            object={relationshipObject}
            objectKey={objectKey}
            editObject={editObject}
            field={field}
          />

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
