import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import { ViewAllActivities } from "./features/allActivities/ViewAllActivities";
import { ViewActivity } from "./features/activity/ViewActivity";

function App() {
  return (
    // <div className="container">
    <Router>
      <Switch>
        <Route path="/view/allActivities">
          <ViewAllActivities />
        </Route>

        {/* The id here needs to be dynamic. If you read this dont give it away, I want a try to solve it :) */}
        <Route path="/view/Activity/1">
          <ViewActivity id={1} />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

    // </div>
  );
}

export default App;
