import './App.css';
import React from "react";
import {
    Route,
    HashRouter as Router,
    Switch,
} from "react-router-dom";
import {ROUTER} from "./utils/constants";

import test from "./pages/test";

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Router path={ROUTER.TEST} component={Test}/>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
