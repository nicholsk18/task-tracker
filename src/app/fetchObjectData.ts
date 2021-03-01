import { DataObject, DeleteObject } from '../models/DataObject';
import { Data } from '../models/Data';

const getData = (urlPath: string) => {
  return fetch(`http://localhost:3001/${urlPath}`)
    .then((res) => res.json())
    .then((data) => data);
};

const removeData = (data: DeleteObject) => {
  return fetch('http://localhost:3001/remove/object/', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((jsonData) => jsonData);
};

const postData = (path: string, data: any) => {
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

export const removeObjectData = async (
  object: DeleteObject
): Promise<DataObject> => {
  return await removeData(object);
};

export const getRelationships = async (
  relatesTo: number,
  type: string
): Promise<Data[]> => {
  const path = `get/type`;
  const obj = {
    relatesTo,
    type,
  };
  return await postData(path, obj).then((data) => data);
};

export const addRelationship = async (
  data: string
): Promise<{ id: number }> => {
  const path = `add/relationship`;
  const obj = data;
  return await postData(path, obj).then((data) => data);
};
