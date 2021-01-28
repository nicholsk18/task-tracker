import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ViewActivity } from './features/activity/ViewActivity';
import ViewSchedule from './features/schedule/ViewSchedule';
import ViewSession from './features/session/ViewSession';
import { Container, Box } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth='sm'>
      <Box border={1} mt={10} textAlign='center'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/view/session' />
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
      </Box>
    </Container>
  );
}

export default App;
