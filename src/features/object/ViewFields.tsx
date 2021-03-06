import React, { FunctionComponent } from 'react';
import BoxContainer from '../../components/BoxContainer';
import ViewRelationshipFragment from './ViewRelationshipFragment';
import ViewValueFragment from './ViewValueFragment';

const ViewFields: FunctionComponent<any> = ({ object }) => {
  return (
    <>
      {object.fields.map((field: any, index: number) => {
        if (typeof object[field] === 'string') {
          return (
            <BoxContainer>
              <ViewValueFragment value={object[field]} />
            </BoxContainer>
          );
        }

        if (typeof object[field] === 'object') {
          return (
            <BoxContainer>
              <ViewRelationshipFragment relationships={object[field]} />
            </BoxContainer>
          );
        }
      })}
    </>
  );
};

export default ViewFields;
