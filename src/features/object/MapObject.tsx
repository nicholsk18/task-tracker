import React, { FunctionComponent } from 'react';
import SwitchField from './SwitchField';

/**
 * if this only received an object
 * we could do a for in loop
 * and check if value is array
 * than loop over those values
 * and pass in those values to switch?
 */
const MapObject: FunctionComponent<any> = ({ object, fields }) => {
  /**
   * takes object and fields because fields can change
   * it makes it easier to map over
   * if pass only object
   * than you have to account for all different fields
   * object.fields.map
   * object.relationships.map
   * object.references.map
   */
  return (
    <React.Fragment>
      {fields.map((field: string, index: number) => (
        <div key={index}>
          {/* gets object and all the fields */}
          {/* map over fields and pass each field to switch */}
          <SwitchField field={object[field]} />
        </div>
      ))}
    </React.Fragment>
  );
};

export default MapObject;
