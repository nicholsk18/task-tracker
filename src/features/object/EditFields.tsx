import React, { FunctionComponent, useState } from 'react';
import BoxContainer from '../../components/BoxContainer';
import EditRelationshipFragment from './EditRelationshipFragment';
import ButtonContainer from '../../components/ButtonContainer';
import EditValueFragment from './EditValueFragment';

const EditFields: FunctionComponent<any> = ({ object, editObject }) => {
  //this doesn't quite make sense: Only one setValue for many fields?
  //We have the same issue as in EditValueFragment - state isn't bound to this state. The real object is in the component above!
  //we're going to need an editObject function passed into this, and remove the line below
  //const [value, setValue] = useState<string>("")

  return (
    <>
      {object.fields.map((field: any, index: number) => {
        if (typeof object[field] === 'string') {
          return (
            <BoxContainer key={index}>
              <EditValueFragment
                value={object[field]}
                field={field}
                editObject={editObject}
              />
            </BoxContainer>
          );
        }

        if (typeof object[field] === 'object') {
          return (
            <>
              <BoxContainer key={index}>
                <EditRelationshipFragment relationships={object[field]} />

                <ButtonContainer to={`/add/${object.id}`} fullWidth={false}>
                  Add Relationship
                </ButtonContainer>
              </BoxContainer>
            </>
          );
        }
      })}
    </>
  );
};

export default EditFields;
