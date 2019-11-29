import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HeadsUp from './HeadsUp';
import AugmentedReality from './AugmentedReality'

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/augmentedReality" component={AugmentedReality}/>
          <Route path="/" component={HeadsUp}/>
        </Switch>
      </div>
    </Router>
  );
}

