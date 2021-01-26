import React from 'react';
import '../../App.css';

const ViewSessionFragment = () => {
  return (
    <div>
      <h3>Sessions</h3>
      <div className='view-item'>
        <button>Load Previous</button>
        <div>
          <div>session</div>
          <div>session</div>
        </div>
        <button>Load More</button>
      </div>
    </div>
  );
};

export default ViewSessionFragment;
