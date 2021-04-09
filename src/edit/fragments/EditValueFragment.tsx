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
}) => {
  return (
    <div style={{ padding: '10px 0' }}>
      <span>{object.type} title: </span>

      <input
        style={{ padding: '5px 10px' }}
        type='text'
        value={object.name}
        onChange={(e) => editObject(e.target.value, objectKey, object.id)}
      />
    </div>
  );
};

export default EditValueFragment;
