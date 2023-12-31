import React from "react";
import {
    Route,
    HashRouter as Router,
    Switch,
} from "react-router-dom";
import './App.css';
import {ROUTER} from "./utils/constants";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Article from "./pages/article_detail";
import Sub_destination from "./pages/sub_destination";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Layout from "./components/layout";
import Search from "./pages/search";
import Admindashboard from "./pages/admin_dashboard";
import Adminlogin from "./pages/admin_login";
import Adminpostpage from "./pages/admin_postpage";
import Admincategory from "./pages/admin_category";


const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path={ROUTER.HOME} component={Home}/>
          <Route path={ROUTER.DESTINATION} component={Destination}/>
          <Route path={ROUTER.ARTICLE} component={Article}/>
          <Route path={ROUTER.SUBDES} component={Sub_destination}/>
          <Route path={ROUTER.ABOUT} component={About}/>
          <Route path={ROUTER.CONTACT} component={Contact}/>
          <Route path={ROUTER.GALLERY} component={Gallery}/>
          <Route path={ROUTER.SEARCH} component={Search}/>
          <Route path={ROUTER.ADDASHBOARD} component={Admindashboard}/>
          <Route path={ROUTER.ADLOGIN} component={Adminlogin}/>
          <Route path={ROUTER.ADPOST} component={Adminpostpage}/>
          <Route path={ROUTER.ADCATEGORY} component={Admincategory}/>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
