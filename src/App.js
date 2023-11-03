import React from "react";
import {
    Route,
    HashRouter as Router,
    Switch,
} from "react-router-dom";
import './App.css';
import {ROUTER} from "./utils/constants";
import Test from "./pages/test";
import Layout from "./components/layout";

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path={ROUTER.TEST} component={Test}/>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
