import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Box, Button, Card } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { getObjectData } from '../../app/fetchObjectData';
import Loading from '../../components/Loading';
import ViewObjectFragment from './ViewObjectFragment';


interface IUseParams {
  id: string;
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

const ViewObject: FunctionComponent = (props) =>{
  const urlID = window.location.pathname.split('/').pop()

  const [object, setObject] = useState<DataObject>()
  const [id, setId] = useState<number>(0)

  useEffect(() => {
    if (urlID) {
      const intID = parseInt(urlID)
      setId(intID);
    }
  }, [urlID])

  useEffect(() => {
    const loadObject = async () => {
      if (id !== 0) {
        setObject(await getObjectData(id))
      }
    }

    loadObject()
  }, [id])

  if (!object) {
    return <Loading />;
  }

  return (
    <Box mx={3}>
      {/* Can be removed later */}
      <h2>View {object.type} Screen</h2>
      <Box my={3}>
        <Card variant='outlined'>
          <h3>{object.data.name}</h3>
        </Card>
      </Box>

      <Box my={3}>
        <Card variant='outlined'>
          {/* type should be same for all relationships so this shouldnt be a problem?*/}
          <h3>{object.relationships[0].type}</h3>
          {object.relationships.map((relationship, index) => (
            <Box m={3} key={index}>
              {/* Made loop here because of the links */}
              {/* If we link fragment where links are not needed to edit screen */}
              <Link to={`/view/${relationship.id}`}>
                <ViewObjectFragment relationship={relationship} />
              </Link>
            </Box>
          ))}
        </Card>
      </Box>

      <Box my={3}>
        <Button
          color='primary'
          variant='contained'
          fullWidth={true}
          component={Link}
          to={`/edit/activity/${object.id}`}
        >
          Edit {object.type}
        </Button>
      </Box>
    </Box>
  )
}

export default ViewObject