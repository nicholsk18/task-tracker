import React, { FunctionComponent } from 'react';
import ViewValueFragment from './ViewValueFragment';
import BoxContainer from '../../components/BoxContainer';

const ViewFields: FunctionComponent<any> = ({ object, fields }) => {
  return (
    <>
      {fields.map((key: any, index: number) => {
        if (typeof object[key] === 'string') {
          return (
            <div key={index}>
              <BoxContainer>
                <span>{object.type} title:</span>
                <ViewValueFragment value={object[key]} />
              </BoxContainer>
            </div>
          )
        }

        if (typeof object[key] === 'object') {
          // ViewObjectPartial
          return <div>test</div>
        }
      })}
    </>
  );
}

export default ViewFields;
