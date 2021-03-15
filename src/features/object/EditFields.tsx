import React, { FunctionComponent } from 'react';
import BoxContainer from '../../components/BoxContainer';
import EditRelationshipFragment from './EditRelationshipFragment';
import ButtonContainer from '../../components/ButtonContainer';
import EditValueFragment from './EditValueFragment';

const EditFields: FunctionComponent<any> = ({
  object,
  editObject,
  addRelationship, // how I want to do this
  removeRelationship,
}) => {
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

              {/* than somewhere here pass the addRelationship callback */}
              <ButtonContainer to={`/add/${object.id}`} fullWidth={false}>
                Add Relationship
              </ButtonContainer>
            </BoxContainer>
          );
        }
      })}
    </>
  );
};

export default EditFields;
