import { getData, postData } from './dataHelper';
import { DataModal } from '../models/DataModal';
import { Template } from '../models/Template';
import { Relationship } from '../models/Relationship';

export const getObjectData = async (id: number): Promise<DataModal> => {
  const path = `object/${id}`;
  return await getData(path).then((data) => data);
};

// This is to fetch relationships
// they will show up in autocomplete
export const getRelationships = async (type: string): Promise<Relationship[]> => {
  const path = `get/relationships`;
  const obj = type;
  return await postData(path, obj).then((data) => data);
};

export const getTemplate = async (type: string): Promise<Template> => {
  const path = 'get/template';
  return await postData(path, type).then((data) => data);
};

export const getNewObject = async (type: string): Promise<DataModal> => {
  const template = await getTemplate(type);
  const object = {
    Template: template,
    data: {
      id: 0,
      name: '',
      type: type,
      relationships: [],
      _id: '',
    },
  };

  return object;
};
