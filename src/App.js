import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ViewAllActivities } from './features/allActivities/ViewAllActivities';
import { ViewActivity } from './features/activity/ViewActivity';
import ViewSchedule from './features/schedule/ViewSchedule';

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
      </Switch>
    </Router>
  );
}

export default App;
