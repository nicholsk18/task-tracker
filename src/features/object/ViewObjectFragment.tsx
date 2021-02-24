import React, { FunctionComponent } from 'react';
import { Card } from '@material-ui/core';
type Relationships = {
  relationship: {
    data: {
      name: string,
    },
    id: number,
    type: string
  }
}
const ViewObjectFragment: FunctionComponent<Relationships> = ({ relationship }) => {
  return <h4>{relationship.data.name}</h4>
}

export default ViewObjectFragment