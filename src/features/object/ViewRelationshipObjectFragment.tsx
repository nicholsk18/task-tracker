import React, { FunctionComponent } from 'react';
import MapObject from './MapObject';

const ViewRelationshipObjectFragment: FunctionComponent<{
  relationship: any;
}> = ({ relationship }) => {
  return (
    <React.Fragment>
      <MapObject object={relationship} fields={relationship.fields} />
    </React.Fragment>
  );
};

export default ViewRelationshipObjectFragment;
