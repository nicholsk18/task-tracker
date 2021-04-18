import React, { FunctionComponent } from 'react';
import { DataObject } from '../../models/DataObject';

interface IProps {
  object: DataObject;
  objectKey: string;
  editObject: { (value: string, objectKey: string, id: number): void };
}

const EditValueFragment: FunctionComponent<IProps> = ({
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
