import React, { FunctionComponent, useState } from 'react';
import BoxContainer from '../../components/BoxContainer';
import EditRelationshipFragment from './EditRelationshipFragment';
import EditValueFragment from './EditValueFragment';
import { Button, Box } from '@material-ui/core';
import AddObjectRelationship from '../../view/fragments/AddObjectRelationship';
import { DataObject } from '../../models/DataObject';
import { Relationship } from '../../models/Relationship';

interface IProps {
  object: DataObject;
  editObject: { (value: string, objectKey: string): void };
  addRelationship: { (newRelationship: Relationship): void };
  removeRelationship: {
    (objectKey: string, removedObject: Relationship): void;
  };
}

const EditFields: FunctionComponent<IProps> = ({
  object,
  editObject,
  addRelationship,
  removeRelationship,
}) => {
  const [addRelState, setAddRelState] = useState<boolean>(false);

  if (addRelState) {
    return (
      <AddObjectRelationship
        object={object}
        addRelationship={addRelationship}
      />
    );
  }

  return (
    <>
      {Object.keys(object).map((objectKey: string, index: number) => {
        if (objectKey === 'name') {
          return (
            <BoxContainer key={index}>
              <EditValueFragment
                value={object[objectKey]}
                objectKey={objectKey}
                editObject={editObject}
              />
            </BoxContainer>
          );
        }

        if (objectKey === 'Relationships') {
          return (
            <BoxContainer key={index}>
              <EditRelationshipFragment
                relationships={object[objectKey]}
                objectKey={objectKey}
                removeRelationship={removeRelationship}
              />

              <Box my={3}>
                <Button
                  onClick={() => setAddRelState(true)}
                  variant='contained'
                  color='primary'
                >
                  Add Relationship
                </Button>
              </Box>
            </BoxContainer>
          );
        }
      })}
    </>
  );
};

export default EditFields;
