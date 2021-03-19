import { DataObject } from '../models/DataObject';

export const getData = (urlPath: string) => {
  return fetch(`http://localhost:3001/${urlPath}`)
    .then((res) => res.json())
    .then((data) => data);
};

export const postData = (path: string, data: DataObject | string) => {
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