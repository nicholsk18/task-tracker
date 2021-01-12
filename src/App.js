import React from 'react';
import { ViewActivity } from './features/activity/ViewActivity'
import './App.css';

function App() {
  return (
      <div className="container">
          <h2>
              Activities
          </h2>

          <ViewActivity />
      </div>
  );
}

export default App;
