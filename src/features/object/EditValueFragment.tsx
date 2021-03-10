import React, { FunctionComponent, useState } from 'react';

const EditValueFragment: FunctionComponent<any> = ({ value }) => {
  const [input, setInput] = useState<any>(value)

  return (
      <div style={{ padding: '10px 0' }}>
        <input style={{ padding: '10px 20px' }} type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
      </div>
  )
}

export default EditValueFragment