import React from 'react';
import View from './components/View'
import { ViewActivity } from './features/activity/ViewActivity'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
          <h2>
              View Activity
          </h2>

          <ViewActivity />

          {/* <View type="Activity" name="Running" />
          <View type="Schedule" name="" />
          <View type="Sessions" name="" /> */}
      </div>
    </div>
  );
}

export default App;
