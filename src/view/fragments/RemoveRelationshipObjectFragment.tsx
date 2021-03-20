import React, { FunctionComponent } from 'react';
import { Box, Button } from '@material-ui/core';
import BoxContainer from '../../components/BoxContainer';
import ViewValueFragment from './ViewValueFragment';
import { Relationship } from '../../models/Relationship';

interface IProps {
  objects: Relationship[];
  objectKey: string;
  removeRelationship: {
    (objectKey: string, removedObject: Relationship): void;
  };
}

const RemoveRelationshipObjectFragment: FunctionComponent<IProps> = ({
  objects,
  objectKey,
  removeRelationship,
}) => {
  return (
    <>
      {objects.map((object: Relationship, index: number) => (
        <BoxContainer key={index}>
          <Box
            px={3}
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <ViewValueFragment value={object.name} />

            <Button
              size='large'
              variant='contained'
              color='secondary'
              onClick={() => removeRelationship(objectKey, object)}
            >
              X
            </Button>
          </Box>
        </BoxContainer>
      ))}
    </>
  );
};

export default RemoveRelationshipObjectFragment;
