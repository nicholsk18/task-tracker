import { DataObject } from '../models/DataObject';
import { Relationship } from '../models/Relationship';

const getData = (urlPath: string) => {
  return fetch(`http://localhost:3001/${urlPath}`)
    .then((res) => res.json())
    .then((data) => data);
};

// const removeData = (data: any) => {
//   return fetch('http://localhost:3001/remove/object/', {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .then((jsonData) => jsonData);
// };

// need to fix data
// it can be many different types
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

// export const removeObjectData = async (id: number, relationship: any) => {
//   const object = {
//     id,
//     relationship,
//   };
//
//   const test = await removeData(object);
//   console.log(test);
//   return await removeData(object);
// };

export const getRelationships = async (
  type: string
): Promise<Relationship[]> => {
  const path = `get/relationships`;
  const obj = type;
  const test = await postData(path, obj).then((data) => data);
  console.log(test);
  return await postData(path, obj).then((data) => data);
};

// export const addRelationship = async (data: any): Promise<{ id: number }> => {
//   const path = `add/relationship`;
//   return await postData(path, data).then((data) => data);
// };

export const updateObject = async (data: DataObject): Promise<DataObject> => {
  const path = 'save/object';
  const obj = data;
  return await postData(path, obj).then((data) => data);
};
