import React from "react";
import {
    Route,
    HashRouter as Router,
    Switch,
} from "react-router-dom";
import './App.css';
import {ROUTER} from "./utils/constants";
import Test from "./pages/test";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Article from "./pages/article_detail";
import Sub_destination from "./pages/sub_destination";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Layout from "./components/layout";

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route extract path={ROUTER.HOME} component={Home}/>
          <Route path={ROUTER.TEST} component={Test}/>
          <Route path={ROUTER.DESTINATION} component={Destination}/>
          <Route path={ROUTER.ARTICLE} component={Article}/>
          <Route path={ROUTER.SUBDES} component={Sub_destination}/>
          <Route path={ROUTER.ABOUT} component={About}/>
          <Route path={ROUTER.CONTACT} component={Contact}/>
          <Route path={ROUTER.GALLERY} component={Gallery}/>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
