import React, { FunctionComponent } from 'react';
import { Box, Button } from '@material-ui/core';
import BoxContainer from '../../components/BoxContainer';
import ViewValueFragment from './ViewValueFragment';
import { Relationship } from '../../models/Relationship';
import EditValueFragment from '../../edit/fragments/EditValueFragment';
import { Link } from 'react-router-dom';
import AddObjectRelationship from './AddObjectRelationship';
import SearchRelationship from '../../components/SearchRelationship';

interface IProps {
  objects: Relationship[];
  objectKey: string;
  removeRelationship: {
    (objectKey: string, removedObject: Relationship): void;
  };
}

const RemoveRelationshipObjectFragment: FunctionComponent<any> = ({
  relationshipObject,
  objectKey,
  removeRelationship,
  addRelationship,
}) => {
  return (
    <>
      <BoxContainer>
        <Box
          px={3}
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          {/* is this new relationship? */}
          {relationshipObject.id === 0 ? (
            <SearchRelationship
              relationshipType={objectKey}
              addRelationship={addRelationship}
            />
          ) : (
            // no? link it to place we can edit
            <div style={{ padding: '20px 0' }}>
              <Link to={`/edit/relationshipObject.id`}>
                {relationshipObject.name}
              </Link>
            </div>
          )}

          <Button
            size='large'
            variant='contained'
            color='secondary'
            onClick={() => removeRelationship(objectKey, relationshipObject)}
          >
            X
          </Button>
        </Box>
      </BoxContainer>
    </>
  );
};

export default RemoveRelationshipObjectFragment;
