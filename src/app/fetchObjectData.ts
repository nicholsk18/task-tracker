import { DataObject, DeleteObject } from '../models/DataObject';
import { Data } from '../models/Data';

const getData = (urlPath: string) => {
  return fetch(`http://localhost:3001/${urlPath}`)
    .then((res) => res.json())
    .then((data) => data);
};

const removeData = (data: any) => {
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

export const removeObjectData = async (id: number, relationship: any) => {
  const object = {
    id,
    relationship,
  };

  const test = await removeData(object);
  console.log(test);
  return await removeData(object);
};

export const getRelationships = async (data: string) => {
  const path = `get/relationships`;
  const obj = data;
  return await postData(path, obj).then((data) => data);
};

export const addRelationship = async (data: any): Promise<{ id: number }> => {
  const path = `add/relationship`;
  return await postData(path, data).then((data) => data);
};

export const updateObject = async (data: any) => {
  const path = 'save/object';
  const obj = data;
  return await postData(path, obj).then((data) => data);
};
