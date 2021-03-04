import React, { FunctionComponent } from 'react';

const ViewValueFragment: FunctionComponent<{ value: any }> = ({ value }) => {
  return <p>{value}</p>;
};

export default ViewValueFragment;
