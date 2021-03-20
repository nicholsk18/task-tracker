import React, { FunctionComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Container, Box } from '@material-ui/core';
import ViewObject from './view/ViewObject';
import EditObject from './edit/EditObject';
import AddObjectRelationship from './view/fragments/AddObjectRelationship';

const App: FunctionComponent = () => {
  return (
    <Container maxWidth='sm'>
      <Box border={1} my={5} textAlign='center'>
        <Router>
          <Switch>
            {/* init redirect wont stay here */}
            <Route exact path='/'>
              <Redirect to='/view/1' />
            </Route>
            {/* end init */}
            <Route path='/view/:id' component={ViewObject} />
            <Route path='/edit/:id' component={EditObject} />
            {/*<Route path='/add/:id' component={AddObjectRelationship} />*/}
          </Switch>
        </Router>
      </Box>
    </Container>
  );
};

export default App;
