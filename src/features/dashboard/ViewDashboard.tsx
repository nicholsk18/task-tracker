import React from 'react';
import { Link } from 'react-router-dom';

const ViewDashboard = () => {
  return (
    <div>
      <h1>Home Screen</h1>
      <p>Home screen is not functional yet got to</p>
      <Link to='/view/session'>
        <span>View Session</span>
      </Link>
    </div>
  );
};

export default ViewDashboard;
