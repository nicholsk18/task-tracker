import React, { FunctionComponent } from 'react';

interface IProps {
  value: string;
  objectKey: string;
  editObject: { (value: string, objectKey: string): void };
}

const EditValueFragment: FunctionComponent<any> = ({
  object,
  objectKey,
  editObject,
  field,
}) => {
  return (
    <div style={{ padding: '10px 0' }}>
      <input
        style={{ padding: '10px 20px' }}
        type='text'
        value={object.name}
        onChange={(e) =>
          editObject(e.target.value, objectKey, field, object.id)
        }
      />
    </div>
  );
};

export default EditValueFragment;
