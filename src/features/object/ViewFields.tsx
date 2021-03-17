import React, { FunctionComponent } from 'react';
import BoxContainer from '../../components/BoxContainer';
import ViewRelationshipFragment from './ViewRelationshipFragment';
import ViewValueFragment from './ViewValueFragment';
import { DataObject } from '../../models/DataObject';

const ViewFields: FunctionComponent<{ object: DataObject }> = ({ object }) => {
  return (
    <>
      {Object.keys(object).map((objectKey: string, index: number) => {
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
