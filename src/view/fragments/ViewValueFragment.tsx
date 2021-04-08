import React, { FunctionComponent } from 'react';

const ViewValueFragment: FunctionComponent<{ value: string }> = ({ value }) => {
  return <div style={{ display: "inline-block", margin: '15px' }}>{value}</div>;
};

export default ViewValueFragment;
