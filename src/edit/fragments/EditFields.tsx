import React, { FunctionComponent } from 'react';
import BoxContainer from '../../components/BoxContainer';
import EditRelationshipFragment from './EditRelationshipFragment';
import EditValueFragment from './EditValueFragment';
import { Button, Box } from '@material-ui/core';
import { Relationship } from '../../models/Relationship';
import ViewValueFragment from '../../view/fragments/ViewValueFragment';
import { DataModal } from '../../models/DataModal';

interface IProps {
  object: DataModal;
  editObject: { (value: string, objectKey: string, id: number): void };
  addRelationship: {
    (type: string, objectID: number, name: string, _id: string): void;
  };
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
  return (
    <>
      {object.Template.fields.map((objectKey: string, index: number) => {
        if (typeof object.data[objectKey] === 'string') {
          return (
            <BoxContainer key={index}>
              <EditValueFragment
                object={object.data}
                objectKey={objectKey}
                editObject={editObject}
              />
            </BoxContainer>
          );
        }

        if (typeof object.data[objectKey] === 'object') {
          return (
            <div key={index}>
              <BoxContainer>
                <ViewValueFragment value={objectKey} />

                <EditRelationshipFragment
                  relationships={object.data[objectKey]}
                  objectKey={objectKey}
                  removeRelationship={removeRelationship}
                  addRelationship={addRelationship}
                />

                <Box my={3}>
                  <Button
                    onClick={() =>
                      addRelationship(
                        object.Template.relationships.to,
                        0,
                        '',
                        ''
                      )
                    }
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
