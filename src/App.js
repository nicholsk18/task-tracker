import React from 'react';
import View from './components/View'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
          <h2>
              View Activity
          </h2>
          <View type="Activity" name="Running" />
          <View type="Schedule" name="" />
          <View type="Sessions" name="" />
      </div>
    </div>
  );
}

export default App;
