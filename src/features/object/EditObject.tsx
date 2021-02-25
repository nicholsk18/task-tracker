import React, { FunctionComponent, useEffect, useState } from 'react';
import { getObjectData } from '../../app/fetchObjectData';
import Loading from '../../components/Loading';
import { Box } from '@material-ui/core';
import { DataObject } from '../../models/DataObject';
import BoxContainer from '../../components/BoxContainer';
import EditObjectFragment from './EditObjectFragment';
import ButtonContainer from '../../components/ButtonContainer';

const EditObject: FunctionComponent = () => {
  const urlID = window.location.pathname.split('/').pop();
  const [object, setObject] = useState<DataObject>();

  useEffect(() => {
    const loadObject = async () => {
      if (urlID) {
        const id = parseInt(urlID);
        setObject(await getObjectData(id));
      }
    };

    loadObject();
  }, [urlID]);

  if (!object) {
    return <Loading />;
  }

  function handleChange(newState: DataObject) {
    setObject(newState);
  }

  return (
    <React.Fragment>
      {/* Can be removed later */}
      <h2>Edit {object.type} Screen</h2>
      <BoxContainer>
        <h3>{object.data.name}</h3>
      </BoxContainer>

      <BoxContainer>
        <h3>{object.relationships[0].type}</h3>
        {object.relationships[0].data ? (
          object.relationships.map((relationship, index) => (
            <React.Fragment key={index}>
              <EditObjectFragment
                id={object.id}
                type={object.type}
                relationship={relationship}
                onChange={handleChange}
              />
            </React.Fragment>
          ))
        ) : (
          <Box my={3}>No Relationships</Box>
        )}
        <ButtonContainer to={`/add/${object.id}`} fullWidth={false}>
          Add Relationship
        </ButtonContainer>
      </BoxContainer>
    </React.Fragment>
  );
};

export default EditObject;
