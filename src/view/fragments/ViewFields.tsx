import React, { FunctionComponent } from 'react';
import BoxContainer from '../../components/BoxContainer';
import ViewRelationshipFragment from './ViewRelationshipFragment';
import ViewValueFragment from './ViewValueFragment';
import { DataModal } from '../../models/DataModal';
import ViewTypeFragment from './ViewTypeFragment';

const ViewFields: FunctionComponent<{ object: DataModal }> = ({ object }) => {
  return (
    <>
      {object.Template.fields.map((objectKey: string, index: number) => {
        if (typeof object.data[objectKey] === 'string') {
          return (
            <BoxContainer key={index}>
              <span>{object.data.type} title:</span>
              <ViewValueFragment value={object.data[objectKey]} />
            </BoxContainer>
          );
        }

        if (typeof object.data[objectKey] === 'object') {
          return (
            <BoxContainer key={index}>
              {/* how it relates */}
              <ViewTypeFragment value={objectKey} />

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
