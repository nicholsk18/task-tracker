import React, { FunctionComponent } from 'react';

const EditValueFragment: FunctionComponent<any> = ({
  value,
  objectKey,
  editObject,
}) => {
  return (
    <div style={{ padding: '10px 0' }}>
      <input
        style={{ padding: '10px 20px' }}
        type='text'
        value={value}
        onChange={(e) => editObject(e.target.value, objectKey)}
      />
    </div>
  );
};

export default EditValueFragment;
