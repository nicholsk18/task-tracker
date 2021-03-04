import React, { FunctionComponent } from 'react';

const ViewValueFragment: FunctionComponent<{ value: any }> = ({ value }) => {
  return <p style={{ margin: '15px' }}>{value}</p>;
};

export default ViewValueFragment;
