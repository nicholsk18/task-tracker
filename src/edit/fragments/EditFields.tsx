import React, { FunctionComponent } from 'react';
import BoxContainer from '../../components/BoxContainer';
import EditRelationshipFragment from './EditRelationshipFragment';
import EditValueFragment from './EditValueFragment';
import { Button, Box } from '@material-ui/core';
import { Relationship } from '../../models/Relationship';
import ViewValueFragment from '../../view/fragments/ViewValueFragment';
import { DataModal } from '../../models/DataModal';

interface IProps {
  object: DataModal;
  editObject: { (value: string, objectKey: string, id: number): void };
  addRelationship: {
    (type: string, objectID: number, name: string, _id: string): void;
  };
  removeRelationship: {
    (objectKey: string, removedObject: Relationship): void;
  };
}

const EditFields: FunctionComponent<any> = ({ object, fields, editFields }) => {
  return (
    <>
      {fields.map((key: string, index: number) => {
        if (typeof object[key] === 'string') {
          return (
            <div key={index}>
              <BoxContainer key={index}>
                <EditValueFragment
                  object={object}
                  objectKey={key}
                  editFields={editFields}
                />
              </BoxContainer>
            </div>
          );
        }
      })}
    </>
  );
};

export default EditFields;
