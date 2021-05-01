import { postData } from './dataHelper';
import { DataModal } from '../models/DataModal';
import { DataObject } from '../models/DataObject';

export const updateObject = async (data: any): Promise<any> => {
  const path = 'save/object';
  return await postData(path, data).then((data) => data);
};

export const createNewObject = async (object: any): Promise<any> => {
  const path = 'create/object';
  return await postData(path, object);
};
