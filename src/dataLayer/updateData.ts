import { postData } from './dataHelper';
import { DataModal } from '../models/DataModal';
import { DataObject } from '../models/DataObject';

export const updateObject = async (data: DataModal): Promise<DataModal> => {
  const path = 'save/object';
  return await postData(path, data).then((data) => data);
};

export const createNewObject = async (
  object: DataObject
): Promise<DataObject> => {
  const path = 'create/object';
  return await postData(path, object);
};
