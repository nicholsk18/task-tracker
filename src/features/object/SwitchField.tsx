import React, { FunctionComponent } from 'react';
import BoxContainer from '../../components/BoxContainer';
import ViewValueFragment from './ViewValueFragment';
import ViewRelationshipFragment from './ViewRelationshipFragment';

const SwitchField: FunctionComponent<any> = ({ field }) => {
  // any way to break this down more?
  // have to check what the field actually is somewhere
  // this still feels weird
  // but easy to add more checks
  if (typeof field === 'string') {
    return (
      <BoxContainer>
        <ViewValueFragment value={field} />
      </BoxContainer>
    );
  }

  if (typeof field === 'object') {
    return (
      <BoxContainer>
        <ViewRelationshipFragment
          // since Switch only gets field
          // I cant use the plural name field here
          // leads to ugly code in next component
          relationships={field}
        />
      </BoxContainer>
    );
  }

  // its recursive so if this is reached
  // should only be single component?
  return <div>No value found</div>
}

export default SwitchField