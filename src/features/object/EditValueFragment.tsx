import React, { FunctionComponent, useState } from 'react';

const EditValueFragment: FunctionComponent<any> = ({ value, field, editObject }) => {
  //this only sets local state. We need this data to propogate up.
  //const [input, setInput] = useState<any>(value)
  //we'll give this an "onchange" to try

  return (
      <div style={{ padding: '10px 0' }}>
        <input style={{ padding: '10px 20px' }} type='text' value={value} onChange={(e) => editObject(e.target.value, field)}/>
      </div>
  )
}

export default EditValueFragment