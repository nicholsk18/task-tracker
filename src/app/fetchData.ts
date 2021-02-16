import { Activity } from '../models/Activity';
import { Schedule } from '../models/Schedule';
import { Tag } from '../models/Tag';
import { Session } from '../models/Session';
import { Sortable } from '../models/Sortable';

const getData = (urlPath: string) => {
  return fetch(`http://localhost:3001/${urlPath}`)
    .then((res) => res.json())
    .then((data) => data);
};

const postData = (urlPath: string, data: number[]) => {
  const obj = {
    data,
  };
  return fetch(`http://localhost:3001/${urlPath}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((jsonData) => jsonData);
};

export const getSession = async (id: number): Promise<Session> => {
  const path = `session/${id}`;
  return await getData(path).then((data) => data);
};

export const getActivity = async (id: number): Promise<Activity> => {
  const path = `activity/${id}`;
  return await getData(path).then((data) => data);
};

export const getAllActivities = async () => {
  const path = 'activities/all';
  return await getData(path).then((data) => data);
};

export const getSchedule = async (id: number): Promise<Schedule> => {
  const path = `schedule/${id}`;
  return await getData(path).then((data) => data);
};

export const getTag = async (id: number): Promise<Tag> => {
  const path = `tag/${id}`;
  return await getData(path).then((data) => data);
};

export const postTags = async (tagIds: number[]): Promise<Tag[]> => {
  const path = 'tags';
  return await postData(path, tagIds).then((data) => data);
};

export const postSortableList = async (
  idList: number[]
): Promise<Sortable[]> => {
  const path = 'sortable/list';
  return await postData(path, idList).then((data) => data);
};
