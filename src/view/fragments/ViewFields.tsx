import React, { FunctionComponent } from 'react';
import ViewValueFragment from './ViewValueFragment';
import { DataModal } from '../../models/DataModal';

const ViewFields: FunctionComponent<{ object: DataModal, objectKey: string }> = ({ object, objectKey }) => {
  return (
    <>
      <span>{object.data.type} title:</span>
      <ViewValueFragment value={object.data[objectKey]} />
    </>
  );
};

export default ViewFields;
