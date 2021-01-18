import React from 'react';

import style from './ViewSession.module.css';

const ViewSessionFragment = () => {
  return (
    <div className={style.session_container}>
      <h3>Sessions</h3>
      <div>
        <button>Load Previous</button>
        <div>
          <div className={style.session_item}>session</div>
          <div className={style.session_item}>session</div>
        </div>
        <button>Load More</button>
      </div>
    </div>
  );
};

export default ViewSessionFragment;
