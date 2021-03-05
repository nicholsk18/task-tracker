import React, { FunctionComponent } from 'react';
import MapObject from './MapObject';

const ViewRelationshipObjectFragment: FunctionComponent<{
  object: any;
}> = ({ object }) => {

  // this makes it recursive to breaks object down to a value
  // that will be displayed
  return (
    <React.Fragment>
      {/* gets an object of an object */}
      {/* confusing but makes it recursive */}
      {/* to break it down to a string value */}
      <MapObject object={object} fields={object.fields} />
    </React.Fragment>
  );
};

export default ViewRelationshipObjectFragment;
