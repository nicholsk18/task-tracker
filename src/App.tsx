import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ViewAllActivities } from './features/allActivities/ViewAllActivities';
import { ViewActivity } from './features/activity/ViewActivity';
import ViewSchedule from './features/schedule/ViewSchedule';
import ViewSession from './features/session/ViewSession';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <ViewAllActivities />
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
