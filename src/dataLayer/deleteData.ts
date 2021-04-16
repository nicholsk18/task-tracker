import { deleteData } from './dataHelper';

export const deleteObjectById = async (id: number): Promise<{ error: string|null }> => {
  const path = 'delete/object';
  console.log(await deleteData(path, id).then((data) => data));
  return await deleteData(path, id).then((data) => data);
};
