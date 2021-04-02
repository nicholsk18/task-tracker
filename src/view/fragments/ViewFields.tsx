import React, { FunctionComponent } from 'react';
import BoxContainer from '../../components/BoxContainer';
import ViewRelationshipFragment from './ViewRelationshipFragment';
import ViewValueFragment from './ViewValueFragment';

const ViewFields: FunctionComponent<{ object: any }> = ({ object }) => {
  return (
    <>
      {object.Template.fields.map((objectKey: string, index: number) => {
        if (typeof object.data[objectKey] === 'string') {
          return (
            <BoxContainer key={index}>
              <ViewValueFragment value={object.data[objectKey]} />
            </BoxContainer>
          );
        }

        if (typeof object.data[objectKey] === 'object') {
          return (
            <BoxContainer key={index}>
              {/* how it relates */}
              <ViewValueFragment value={objectKey} />

              <ViewRelationshipFragment
                relationships={object.data[objectKey]}
              />
            </BoxContainer>
          );
        }
        // other if() checks for any other fields data we add later
      })}
    </>
  );
};

export default ViewFields;
