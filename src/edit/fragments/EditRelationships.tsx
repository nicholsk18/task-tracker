import { Box, Button } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import BoxContainer from '../../components/BoxContainer';
import ViewValueFragment from '../../view/fragments/ViewValueFragment';
import EditRelationshipFragment from './EditRelationshipFragment';

const EditRelationships: FunctionComponent<any> = ({
  object,
  relationships,
  addRelationship,
  removeRelationship,
}) => {
  return (
    <>
      {relationships.map((type: string, index: number) => (
        <div key={index}>
          <BoxContainer>
            <ViewValueFragment value={type} />

            <EditRelationshipFragment
              relationships={object.relationships}
              type={type}
              removeRelationship={removeRelationship}
              addRelationship={addRelationship}
            />

            <Box my={3}>
              <Button
                onClick={() => addRelationship(type, 0, '')}
                variant='contained'
                color='primary'
              >
                Add Relationship
              </Button>
            </Box>
          </BoxContainer>
        </div>
      ))}
    </>
  );
};

export default EditRelationships;
