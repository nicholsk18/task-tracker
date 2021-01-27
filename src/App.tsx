import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ViewActivity } from './features/activity/ViewActivity';
import ViewSchedule from './features/schedule/ViewSchedule';
import ViewSession from './features/session/ViewSession';
import ViewDashboard from './features/dashboard/ViewDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <ViewDashboard />
        </Route>
        <Route path='/view/Activity/:id'>
          <ViewActivity />
        </Route>
        <Route path='/view/schedule/:id'>
          <ViewSchedule />
        </Route>
        <Route path='/view/session/'>
          <ViewSession />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
