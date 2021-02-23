const getData = (urlPath: string) => {
  return fetch(`http://localhost:3001/${urlPath}`)
    .then((res) => res.json())
    .then((data) => data);
};

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