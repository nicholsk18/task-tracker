import React, { FunctionComponent } from 'react';
import ViewTypeFragment from './ViewTypeFragment';
import ViewRelationshipFragment from './ViewRelationshipFragment';
import { DataModal } from '../../models/DataModal';

const ViewRelationships: FunctionComponent<{ object: DataModal, objectKey: string }> = ({ object, objectKey }) => {
  return (
    <>
      {/* how it relates */}
      <ViewTypeFragment value={objectKey} />

      <ViewRelationshipFragment
        relationships={object.data[objectKey]}
      />
    </>
  )
}

export default ViewRelationships