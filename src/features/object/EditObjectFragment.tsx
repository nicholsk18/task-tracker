import React, { FunctionComponent } from 'react';
import { Box, Button } from '@material-ui/core';
import BoxContainer from '../../components/BoxContainer';
import { removeObjectData } from '../../app/fetchObjectData';
import { Relationship } from '../../models/Relationship';
import { DataObject } from '../../models/DataObject';

interface handleChange {
  (newState: DataObject): void;
}

interface IProps {
  id: number;
  type: string;
  relationship: Relationship;
  onChange: handleChange;
}

const EditObjectFragment: FunctionComponent<IProps> = ({
  id,
  type,
  relationship,
  onChange,
}) => {
  async function removeRelationship() {
    const relID = relationship.id;
    // onChange(await removeObjectData({ type, id, relID }));
  }

  return (
    <BoxContainer>
      <Box
        px={3}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <h4>{relationship.data.name}</h4>

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
