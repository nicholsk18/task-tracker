import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom'
import BoxContainer from '../../components/BoxContainer';
import ViewValueFragment from './ViewValueFragment';

const ViewRelationshipObjectFragment: FunctionComponent<{
  objects: any;
}> = ({ objects }) => {
  return (
    <>
      {objects.map((object: any, index: number) => (
        <BoxContainer key={index}>
          <Link to={`/view/${object.id}`}>
            <ViewValueFragment value={object.name} />
          </Link>
        </BoxContainer>
      ))}
    </>
  );
};

export default ViewRelationshipObjectFragment;
