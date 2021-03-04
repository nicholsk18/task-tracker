import React, { FunctionComponent } from 'react';
import MapEditObject from './MapEditObject';
import { Box, Button } from '@material-ui/core';
import BoxContainer from '../../components/BoxContainer';
import { removeObjectData } from '../../app/fetchObjectData';

type Relationship = {
  relationship: any;
};

const RemoveRelationshipObjectFragment: FunctionComponent<Relationship> = ({ relationship }) => {
  const urlID = window.location.pathname.split('/').pop();

  async function removeRelationship (relationship: any) {
    await removeObjectData(urlID, relationship)
  }

  return (
    <BoxContainer>
      <Box
        px={3}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <MapEditObject object={relationship} fields={relationship.fields} />

        <Button
          size='large'
          variant='contained'
          color='secondary'
          onClick={() => removeRelationship(relationship)}
        >
          X
        </Button>
      </Box>
    </BoxContainer>
  )
}

export default RemoveRelationshipObjectFragment