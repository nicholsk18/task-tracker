import { DataObject } from '../models/DataObject';
import { Relationship } from '../models/Relationship';
import { getData, postData } from './dataHelper';

export const getObjectData = async (id: number): Promise<DataObject> => {
  const path = `object/${id}`;
  return await getData(path).then((data) => data);
};

export const getRelationships = async (
  type: string
): Promise<Relationship[]> => {
  const path = `get/relationships`;
  const obj = type;
  return await postData(path, obj).then((data) => data);
};
