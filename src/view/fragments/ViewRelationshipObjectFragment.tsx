import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import BoxContainer from '../../components/BoxContainer';
import ViewValueFragment from './ViewValueFragment';
import { Relationship } from '../../models/Relationship';

const ViewRelationshipObjectFragment: FunctionComponent<{
  objects: Relationship[];
}> = ({ objects }) => {
  return (
    <>
      {objects.map((object: Relationship, index: number) => (
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
