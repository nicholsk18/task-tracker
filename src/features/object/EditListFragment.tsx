import React, { FunctionComponent } from 'react';
import EditObjectFragment from './EditObjectFragment';
import { Box } from '@material-ui/core';
import ButtonContainer from '../../components/ButtonContainer';
import BoxContainer from '../../components/BoxContainer';
import { DataObject } from '../../models/DataObject';

interface handleChange {
  (newState: DataObject): void;
}

interface IProps {
  object: DataObject;
  onChange: handleChange;
}

const EditListFragment: FunctionComponent<IProps> = ({ object, onChange }) => {
  // I need object id and type
  // so if we are moving the edit list
  // we can do it this way
  // or pass { id, type, relationship, onChange } as a prop?
  return (
    <BoxContainer>
      <h3>{object.relationships[0].type}</h3>
      {object.relationships[0].data ? (
        object.relationships.map((relationship, index) => (
          <React.Fragment key={index}>
            <EditObjectFragment
              id={object.id}
              type={object.type}
              relationship={relationship}
              onChange={onChange}
            />
          </React.Fragment>
        ))
      ) : (
        <Box my={3}>No Relationships</Box>
      )}
      <ButtonContainer to={`/add/${object.id}`} fullWidth={false}>
        Add Relationship
      </ButtonContainer>
    </BoxContainer>
  );
};

export default EditListFragment;
