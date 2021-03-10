import React, { FunctionComponent, useState } from 'react';
import BoxContainer from '../../components/BoxContainer';
import EditRelationshipFragment from './EditRelationshipFragment';
import ButtonContainer from '../../components/ButtonContainer';
import EditValueFragment from './EditValueFragment';

const EditFields: FunctionComponent<any> = ({ object }) => {
  const [value, setValue] = useState<string>("")

  return (
    <>
      {object.fields.map((field: any, index: number) => {
        if (typeof object[field] === 'string') {

          return (
            <BoxContainer key={index}>
              <EditValueFragment value={object[field]} />
            </BoxContainer>
          );
        }

        if (typeof object[field] === 'object') {
          return (
            <>
              <BoxContainer key={index}>
                <EditRelationshipFragment relationships={object[field]} />

                <ButtonContainer to={`/add/${object.id}`} fullWidth={false}>
                  Add Relationship
                </ButtonContainer>
              </BoxContainer>

              <ButtonContainer to={`/add/${object.id}`} fullWidth={true}>
                Save {object.type}
              </ButtonContainer>
            </>
          );
        }
      })}
    </>
  );
};

export default EditFields;
