import React, { FunctionComponent } from 'react';
import ViewTypeFragment from './ViewTypeFragment';
import ViewRelationshipFragment from './ViewRelationshipFragment';
import BoxContainer from '../../components/BoxContainer';

const ViewRelationships: FunctionComponent<any> = ({ object, template }) => {
  console.log(template);
  return (
    <>
      {template.relationships.map((key: any, index: number) => (
        <div key={index}>
          <BoxContainer>
            <ViewTypeFragment value={key} />
            <ViewRelationshipFragment relationships={object.relationships} />
          </BoxContainer>
        </div>
      ))}
    </>
  );
};

export default ViewRelationships;
