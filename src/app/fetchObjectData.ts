interface deleteObject {
  type: string
  id: number
  relID: number
}

const getData = (urlPath: string) => {
  return fetch(`http://localhost:3001/${urlPath}`)
    .then((res) => res.json())
    .then((data) => data);
};

const removeData = (data: deleteObject) => {
  return fetch('http://localhost:3001/remove/object/', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())
    .then((jsonData) => jsonData);
}

// This will go in model file
type DataObject = {
  id: number,
  type: string,
  data: {
    name: string,
  },
  relationships: [{
    id: number,
    type: string
    data: {
      name: string
    },
  }]
}

export const getObjectData = async (id: number): Promise<DataObject> => {
  const path = `object/${id}`
  return await getData(path).then(data => data)
}

export const removeObjectData = async (object: deleteObject) => {
  return await removeData(object)
}