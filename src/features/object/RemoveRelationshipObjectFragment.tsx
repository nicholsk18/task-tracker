import React, { FunctionComponent } from 'react';
import { Box, Button } from '@material-ui/core';
import BoxContainer from '../../components/BoxContainer';
import ViewValueFragment from './ViewValueFragment';
import { log } from 'util';

const RemoveRelationshipObjectFragment: FunctionComponent<any> = ({
  objects,
  objectKey,
  removeRelationship,
}) => {
  return (
    <>
      {objects.map((object: any, index: number) => (
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
