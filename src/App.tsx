import React, { FunctionComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ViewActivity from './features/activity/ViewActivity';
import ViewSchedule from './features/schedule/ViewSchedule';
import ViewSession from './features/session/ViewSession';
import { Container, Box } from '@material-ui/core';
import ViewTag from './features/tag/ViewTag';
import EditTag from './features/tag/EditTag'

const App: FunctionComponent = () => {
  return (
    <Container maxWidth='sm'>
      <Box border={1} my={5} textAlign='center'>
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
            <Route path='/view/tag/:id' component={ViewTag} />
            <Route path='/edit/tag/:id' component={EditTag} />
          </Switch>
        </Router>
      </Box>
    </Container>
  );
};

export default App;
