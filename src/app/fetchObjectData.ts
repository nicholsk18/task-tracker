import { DataObject } from '../models/DataObject';
import { Relationship } from '../models/Relationship';

const getData = (urlPath: string) => {
  return fetch(`http://localhost:3001/${urlPath}`)
    .then((res) => res.json())
    .then((data) => data);
};

const postData = (path: string, data: DataObject | string) => {
  return fetch(`http://localhost:3001/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  })
    .then((res) => res.json())
    .then((jsonData) => jsonData);
};

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

export const updateObject = async (data: DataObject): Promise<DataObject> => {
  const path = 'save/object';
  const obj = data;
  return await postData(path, obj).then((data) => data);
};
