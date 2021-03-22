import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import BoxContainer from '../../components/BoxContainer';
import ViewValueFragment from './ViewValueFragment';

const ViewRelationshipObjectFragment: FunctionComponent<any> = ({
  relationshipObject,
}) => {
  return (
    <BoxContainer>
      <Link to={`/view/${relationshipObject.id}`}>
        <ViewValueFragment value={relationshipObject.name} />
      </Link>
    </BoxContainer>
  );
};

export default ViewRelationshipObjectFragment;
