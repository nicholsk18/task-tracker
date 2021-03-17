import React, { FunctionComponent } from 'react';

const ViewValueFragment: FunctionComponent<{ value: string }> = ({ value }) => {
  return <p style={{ margin: '15px' }}>{value}</p>;
};

export default ViewValueFragment;
