import React, { FunctionComponent } from 'react';
import BoxContainer from '../../components/BoxContainer';
import ViewRelationshipFragment from './ViewRelationshipFragment';
import ViewValueFragment from './ViewValueFragment';

const ViewFields: FunctionComponent<{ object: any }> = ({ object }) => {
  return (
    <>
      {object.Template.fields.map((objectKey: string, index: number) => {
        if (typeof object.fields[objectKey] === 'string') {
          return (
            <BoxContainer key={index}>
              <ViewValueFragment value={object.fields[objectKey]} />
            </BoxContainer>
          );
        }
        // other if() checks for any other fields data we add later
      })}

      {object.Template.relationships.map((objectKey: string, index: number) => {
        if (typeof object.relationships[objectKey] === 'object') {
          return (
            <BoxContainer key={index}>
              {/* how it relates */}
              <ViewValueFragment value={objectKey} />

              <ViewRelationshipFragment
                relationships={object.relationships[objectKey]}
              />
            </BoxContainer>
          );
        }
      })}
    </>
  );
};

export default ViewFields;
