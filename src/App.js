import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ViewAllActivities } from './views/ViewAllActivities';
import { ViewActivity } from './views/activity/ViewActivity';
import ViewSchedule from './views/schedule/ViewSchedule';

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
