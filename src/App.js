import React from 'react';
import { ViewAllActivities } from './features/allActivities/ViewAllActivities'
import './App.css';

function App() {
  return (
      <div className="container">
          <h2>
              Activities
          </h2>

          <ViewAllActivities />
      </div>
  );
}

export default App;
