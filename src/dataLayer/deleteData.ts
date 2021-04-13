import { deleteData } from './dataHelper';

export const deleteObjectById = async (id: number) => {
  const path = 'delete/object';
  return await deleteData(path, id).then((data) => data);
};
