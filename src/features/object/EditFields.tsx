import React, { FunctionComponent } from 'react';
import BoxContainer from '../../components/BoxContainer';
import EditRelationshipFragment from './EditRelationshipFragment';
import ViewValueFragment from './ViewValueFragment';

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
            </BoxContainer>
          );
        }
      })}
    </>
  );
};

export default EditFields;
