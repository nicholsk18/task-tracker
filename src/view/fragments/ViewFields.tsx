import React, { FunctionComponent } from 'react';
import ViewValueFragment from './ViewValueFragment';
import BoxContainer from '../../components/BoxContainer';

const ViewFields: FunctionComponent<any> = ({ object, template }) => {
  return (
    <>
      {template.fields.map((key: any, index: number) => (
        <div key={index}>
          <BoxContainer>
            <span>{object.type} title:</span>
            <ViewValueFragment value={object[key]} />
          </BoxContainer>
        </div>
      ))}
    </>
  );
};

export default ViewFields;
