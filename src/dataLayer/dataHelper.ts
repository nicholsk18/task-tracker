import { DataModal } from '../models/DataModal';
import { DataObject } from '../models/DataObject';

const API_PATH = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL

export const getData = (urlPath: string): Promise<DataModal> => {
  console.log(API_PATH);
  console.log(urlPath);
  return fetch(`${API_PATH}/${urlPath}`)
    .then((res) => res.json())
    .then((data) => data);
};

export const postData = (
  path: string,
  data: DataModal | DataObject | string
): Promise<any> => {
  return fetch(`${API_PATH}/${path}`, {
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
  return fetch(`${API_PATH}/${path}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  })
    .then((res) => res.json())
    .then((jsonData) => jsonData);
};
