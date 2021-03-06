import React, { FunctionComponent } from 'react';
import BoxContainer from '../../components/BoxContainer';
import ViewValueFragment from './ViewValueFragment';

const ViewRelationshipObjectFragment: FunctionComponent<{
  objects: any;
}> = ({ objects }) => {
  return (
    <>
      {objects.map((object: any, index: number) => (
        <BoxContainer key={index}>
          <ViewValueFragment value={object.name} />
        </BoxContainer>
      ))}
    </>
  );
};

export default ViewRelationshipObjectFragment;
