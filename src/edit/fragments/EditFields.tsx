import React, { FunctionComponent, useState } from 'react';
import BoxContainer from '../../components/BoxContainer';
import EditRelationshipFragment from './EditRelationshipFragment';
import EditValueFragment from './EditValueFragment';
import { Button, Box } from '@material-ui/core';
import AddObjectRelationship from '../../view/fragments/AddObjectRelationship';
import { DataObject } from '../../models/DataObject';
import { Relationship } from '../../models/Relationship';
import ViewValueFragment from '../../view/fragments/ViewValueFragment';

interface IProps {
  object: DataObject;
  editObject: { (value: string, objectKey: string): void };
  addRelationship: { (newRelationship: Relationship): void };
  removeRelationship: {
    (objectKey: string, removedObject: Relationship): void;
  };
}

const EditFields: FunctionComponent<any> = ({
  object,
  editObject,
  addRelationship,
  removeRelationship,
}) => {
  return (
    <>
      {object.Template.fields.map((objectKey: string, index: number) => {
        if (typeof object.fields[objectKey] === 'string') {
          return (
            <BoxContainer key={index}>
              <EditValueFragment
                object={object.fields}
                objectKey={objectKey}
                editObject={editObject}
                field={'fields'}
              />
            </BoxContainer>
          );
        }
      })}

      {object.Template.relationships.map((objectKey: string, index: number) => {
        if (typeof object.relationships[objectKey] === 'object') {
          return (
            <div key={index}>
              <BoxContainer>
                <ViewValueFragment value={objectKey} />

                <EditRelationshipFragment
                  relationships={object.relationships[objectKey]}
                  objectKey={objectKey}
                  removeRelationship={removeRelationship}
                  addRelationship={addRelationship}
                />

                <Box my={3}>
                  <Button
                    onClick={() => addRelationship(objectKey)}
                    variant='contained'
                    color='primary'
                  >
                    Add Relationship
                  </Button>
                </Box>
              </BoxContainer>
            </div>
          );
        }
      })}
    </>
  );
};

export default EditFields;
