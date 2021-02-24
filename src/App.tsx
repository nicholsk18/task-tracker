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
import EditTag from './features/tag/EditTag';
import AddTagRelationship from './features/tag/AddTagRelationship';
import AddActivityRelationship from './features/activity/AddActivityRelationship';
import EditActivity from './features/activity/EditActivity';
import ViewObject from './features/object/ViewObject';
import EditObject from './features/object/EditObject';

const App: FunctionComponent = () => {
  return (
    <Container maxWidth='sm'>
      <Box border={1} my={5} textAlign='center'>
        <Router>
          <Switch>
            {/* New Routes */}
            <Route exact path='/'>
              <Redirect to='/view/1' />
            </Route>
            <Route path='/view/:id' component={ViewObject} />
            <Route path='/edit/:id' component={EditObject} />

            {/* Old Routes */}
            {/*<Route exact path='/'>*/}
            {/*  <Redirect to='/view/session' />*/}
            {/*</Route>*/}
            <Route path='/view/Activity/:id' component={ViewActivity} />
            <Route path='/edit/activity/:id' component={EditActivity} />
            <Route
              path='/add/activity/:id'
              component={AddActivityRelationship}
            />
            <Route path='/view/schedule/:id' component={ViewSchedule} />
            <Route path='/view/session/' component={ViewSession} />
            <Route path='/view/tag/:id' component={ViewTag} />
            <Route path='/edit/tag/:id' component={EditTag} />
            <Route path='/add/tag/:id' component={AddTagRelationship} />
          </Switch>
        </Router>
      </Box>
    </Container>
  );
};

export default App;
