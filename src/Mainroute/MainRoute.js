import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import SignIn from "../component/login";
import Profile from "../component/Profile";
import Content from "../component/Content";

class Mainroute extends Component {
    render() {
      return (
        <Switch>
            <Route exact path="/" component={Content}/>
            <Route exact path="/home" component={Content}/>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/signin" component={SignIn} />
        </Switch>
      );
    }
  }
  
export default Mainroute;