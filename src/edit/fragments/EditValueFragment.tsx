import React, { FunctionComponent } from 'react';

interface IProps {
  value: string;
  objectKey: string;
  editObject: { (value: string, objectKey: string): void };
}

const EditValueFragment: FunctionComponent<IProps> = ({
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
