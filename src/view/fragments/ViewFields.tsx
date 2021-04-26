import React, { FunctionComponent } from 'react';
import ViewValueFragment from './ViewValueFragment';
import { DataModal } from '../../models/DataModal';
import ViewTypeFragment from './ViewTypeFragment';
import { Box } from '@material-ui/core';

const ViewFields: FunctionComponent<{
  object: DataModal;
  objectKey: string;
}> = ({ object, objectKey }) => {
  return (
    <>
      <ViewTypeFragment value={`View ${object.data.type}`} />
      <hr />

      <span>{object.data.type} title:</span>
      <ViewValueFragment value={object.data[objectKey]} />
    </>
  );
};

export default ViewFields;
