// doing all this in one file and repeating in other files feels really cluttered
interface Activity {
  id: number;
  name: string;
  tagIds: [];
}
interface Schedule {
  id: number;
  sortableIds: [];
}
interface Tag {
  id: number;
  name: string;
  activityIds: [];
}

// <!-- end -->

const getData = (urlPath: string) => {
  return fetch(`http://localhost:3001/${urlPath}`)
    .then((res) => res.json())
    .then((data) => data);
};

const postData = (urlPath: string, data: Record<string, unknown>) => {
  return fetch(`http://localhost:3001/${urlPath}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((jsonData) => jsonData);
};

export const getActivity = async (id: number): Promise<Activity> => {
  const path = `activity/${id}`;
  return await getData(path).then((data) => data);
};

export const getSchedule = async (id: number): Promise<Schedule> => {
  const path = `schedule/${id}`;
  return await getData(path).then((data) => data);
};

export const getTag = async (id: string): Promise<Tag> => {
  const path = `tag/${id}`;
  return await getData(path).then((data) => data);
};
