import { getData, postData } from './dataHelper';

export const getObjectData = async (id: number) => {
  const path = `object/${id}`;
  return await getData(path).then((data) => data);
};

// This is to fetch relationships
// they will show up in autocomplete
export const getRelationships = async (type: string) => {
  const path = `get/relationships`;
  const obj = type;
  return await postData(path, obj).then((data) => data);
};

export const getTemplate = async (type: string) => {
  const path = 'get/template';
  return await postData(path, type).then((data) => data);
};

export const getNewObject = async (type: string) => {
  const template = await getTemplate(type);
  const object = {
    Template: template,
    data: {
      id: 0,
      name: '',
      type: type,
      relationships: [],
      _id: 0,
    },
  };

  return object;
};
