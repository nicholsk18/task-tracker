import React, { FunctionComponent } from 'react';
import { Box, Button } from '@material-ui/core';
import ViewObjectFragment from './ViewObjectFragment';
import BoxContainer from '../../components/BoxContainer';
import { removeObjectData } from '../../app/fetchObjectData';
import { Relationship } from '../../models/Relationship';

interface IProps {
  id: number;
  type: string;
  relationship: Relationship;
  onChange: any; // not sure what type this should be
}

const EditObjectFragment: FunctionComponent<IProps> = ({
  id,
  type,
  relationship,
  onChange,
}) => {
  async function removeRelationship() {
    const relID = relationship.id;
    onChange(await removeObjectData({ type, id, relID }));
  }

  return (
    <BoxContainer>
      <Box
        px={3}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <ViewObjectFragment relationship={relationship} />
        <Button
          size='large'
          variant='contained'
          color='secondary'
          onClick={removeRelationship}
        >
          X
        </Button>
      </Box>
    </BoxContainer>
  );
};

export default EditObjectFragment;
