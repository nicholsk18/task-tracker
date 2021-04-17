import { DataModal } from '../models/DataModal';
import { DataObject } from '../models/DataObject';

export const getData = (urlPath: string): Promise<DataModal> => {
  // return fetch(`http://localhost:3001/${urlPath}`)
  return fetch(`${urlPath}`)
    .then((res) => res.json())
    .then((data) => data);
};

export const postData = (
  path: string,
  data: DataModal | DataObject | string
): Promise<any> => {
  // return fetch(`http://localhost:3001/${path}`, {
  return fetch(`${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  })
    .then((res) => res.json())
    .then((jsonData) => jsonData);
};

export const deleteData = (
  path: string,
  data: number
): Promise<{ error: string | null }> => {
  // return fetch(`http://localhost:3001/${path}`, {
  return fetch(`${path}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  })
    .then((res) => res.json())
    .then((jsonData) => jsonData);
};
