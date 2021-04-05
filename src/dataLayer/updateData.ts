import { DataObject } from '../models/DataObject';
import { postData } from './dataHelper';

export const updateObject = async (data: DataObject): Promise<DataObject> => {
  const path = 'save/object';
  const obj = data;
  return await postData(path, obj).then((data) => data);
};

export const createNewObject = async (object: any) => {
  const path = 'create/object'
  return await postData(path, object)
}