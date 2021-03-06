import React, { FunctionComponent } from 'react';
import { Box, Button } from '@material-ui/core';
import BoxContainer from '../../components/BoxContainer';
import ViewValueFragment from './ViewValueFragment';

const RemoveRelationshipObjectFragment: FunctionComponent<{ objects: any }> = ({
  objects,
}) => {
  const urlID = window.location.pathname.split('/').pop();

  async function removeRelationship(relationship: any) {
    // await removeObjectData(urlID, relationship)
  }

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
              onClick={() => removeRelationship(object)}
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
