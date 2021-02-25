import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import { getObjectData } from '../../app/fetchObjectData';
import Loading from '../../components/Loading';
import ViewObjectFragment from './ViewObjectFragment';
import { DataObject } from '../../models/DataObject';
import BoxContainer from '../../components/BoxContainer';
import ButtonContainer from '../../components/ButtonContainer';

const ViewObject: FunctionComponent = () => {
  const urlID = window.location.pathname.split('/').pop();
  const [object, setObject] = useState<DataObject>();

  useEffect(() => {
    const loadObject = async () => {
      // make sure urlID exists before parsing and fetching
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

  return (
    <React.Fragment>
      {/* Can be removed later */}
      <h2>View {object.type} Screen</h2>
      <BoxContainer>
        <h3>{object.data.name}</h3>
      </BoxContainer>

      <BoxContainer>
        {/* type should be same for all relationships so this shouldnt be a problem?*/}
        <h3>{object.relationships[0].type}</h3>
        {object.relationships[0].data ? (
          object.relationships.map((relationship, index) => (
            <BoxContainer key={index}>
              {/* Made loop here because of the links */}
              {/* If we link fragment where links are not needed to edit screen */}
              <Link to={`/view/${relationship.id}`}>
                <ViewObjectFragment relationship={relationship} />
              </Link>
            </BoxContainer>
          ))
        ) : (
          <Box my={3}>No Relationships</Box>
        )}
      </BoxContainer>

      <ButtonContainer to={`/edit/${object.id}`} fullWidth={true}>
        Edit {object.type}
      </ButtonContainer>
    </React.Fragment>
  );
};

export default ViewObject;
