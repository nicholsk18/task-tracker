import React, { FunctionComponent } from 'react';
import BoxContainer from '../../components/BoxContainer';
import EditRelationshipFragment from './EditRelationshipFragment';
import ViewValueFragment from './ViewValueFragment';
import ButtonContainer from '../../components/ButtonContainer';

const EditFields: FunctionComponent<any> = ({ object }) => {
  return (
    <>
      {object.fields.map((field: any, index: number) => {
        if (typeof object[field] === 'string') {
          return (
            <BoxContainer key={index}>
              <ViewValueFragment value={object[field]} />
            </BoxContainer>
          );
        }

        if (typeof object[field] === 'object') {
          return (
            <BoxContainer key={index}>
              <EditRelationshipFragment relationships={object[field]} />

              <ButtonContainer to={`/add/${object.id}`} fullWidth={true}>
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
