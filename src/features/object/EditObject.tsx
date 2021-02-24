import React, { FunctionComponent, useEffect, useState } from 'react';
import { getObjectData, removeObjectData } from '../../app/fetchObjectData';
import Loading from '../../components/Loading';
import { Box, Button, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ViewObjectFragment from './ViewObjectFragment';

type DataObject = {
  id: number;
  type: string;
  data: {
    name: string;
  };
  relationships: [
    {
      id: number;
      type: string;
      data: {
        name: string;
      };
    }
  ];
};

const EditObject: FunctionComponent = () => {
  const urlID = window.location.pathname.split('/').pop();

  const [object, setObject] = useState<DataObject>();
  const [id, setId] = useState<number>(0);

  useEffect(() => {
    if (urlID) {
      const intID = parseInt(urlID);
      setId(intID);
    }
  }, [urlID]);

  useEffect(() => {
    const loadObject = async () => {
      if (id !== 0) {
        setObject(await getObjectData(id));
      }
    };

    console.log('test');
    loadObject();
  }, [id]);

  if (!object) {
    return <Loading />;
  }

  // should this be here?
  const removeRelationship = async (
    type: string,
    id: number,
    relID: number
  ) => {
    setObject(await removeObjectData({ type, id, relID }));
  };

  return (
    <Box mx={3}>
      {/* Can be removed later */}
      <h2>Edit {object.type} Screen</h2>
      <Box my={3}>
        <Card variant='outlined'>
          <h3>{object.data.name}</h3>
        </Card>
      </Box>

      <Box my={3}>
        <Card variant='outlined'>
          <h3>{object.relationships[0].type}</h3>
          {object.relationships[0].data ? (
            object.relationships.map((relationship, index) => (
              <Box m={3} key={index}>
                <Card variant='outlined'>
                  <Box
                    px={3}
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                  >
                    <ViewObjectFragment relationship={relationship} />
                    <Button
                      size='large'
                      variant='contained'
                      color='secondary'
                      onClick={() =>
                        removeRelationship(
                          object.type,
                          object.id,
                          relationship.id
                        )
                      }
                    >
                      X
                    </Button>
                  </Box>
                </Card>
              </Box>
            ))
          ) : (
            <div>No Relationships</div>
          )}
          <Box m={3}>
            {/* probably needs different link */}
            <Button
              variant='contained'
              color='primary'
              component={Link}
              to={`/add/${object.id}`}
            >
              Add Relationship
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default EditObject;
