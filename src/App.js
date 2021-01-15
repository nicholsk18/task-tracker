import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import { ViewAllActivities } from './features/allActivities/ViewAllActivities';
import { ViewActivity } from './features/activity/ViewActivity';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/view/allActivities'>
          <ViewAllActivities />
        </Route>

        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/view/Activity/:id'>
          <ViewActivity />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
