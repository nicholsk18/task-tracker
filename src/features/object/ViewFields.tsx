import React, { FunctionComponent } from 'react';
import BoxContainer from '../../components/BoxContainer';
import ViewRelationshipFragment from './ViewRelationshipFragment';
import ViewValueFragment from './ViewValueFragment';

const ViewFields: FunctionComponent<any> = ({ object }) => {
  return (
    <>
      {Object.keys(object).map((objectKey: any, index: number) => {
        // I feel like this is a better way
        // if name show value
        // if relationships do relationship thing
        // if schedule do schedule stuff...

        if (objectKey === 'name') {
          return (
            <BoxContainer key={index}>
              <ViewValueFragment value={object[objectKey]} />
            </BoxContainer>
          );
        }

        if (objectKey === 'Relationships') {
          return (
            <BoxContainer key={index}>
              <ViewRelationshipFragment relationships={object[objectKey]} />
            </BoxContainer>
          );
        }
      })}
    </>
  );
};

export default ViewFields;
