import React, { FunctionComponent } from 'react';
import BoxContainer from '../../components/BoxContainer';
import ViewValueFragment from './ViewValueFragment';
import EditRelationshipFragment from './EditRelationshipFragment';

const MapEditObject: FunctionComponent<any> = ({ object, fields}) => {
  return (
    <React.Fragment>
      {fields.map((field: string, index: number) => {
        if (typeof object[field] === 'string') {
          return (
            <BoxContainer key={index}>
              <ViewValueFragment value={object[field]} />
            </BoxContainer>
          );
        }

        if (typeof object[field] === 'object') {
          return (
            <BoxContainer key={index}>
              <EditRelationshipFragment
                name={field}
                relationships={object[field]}
              />
            </BoxContainer>
          );
        }
      })}
    </React.Fragment>
  );
}

export default MapEditObject