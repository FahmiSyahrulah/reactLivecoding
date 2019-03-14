import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect} from "unistore/react";
import {actions} from "../Store";

class Signin extends Component {
  doLogin = () => {
    this.props.postLogin().then(() => {
      console.log("this", this);
      this.props.history.replace('/profile');
    });
  };
  render(){
    console.log("signin props", this.props);
    return(
      <section className="content signin">
        <form onSubmit={e => e.preventDefault()}>
          <h4>SignIn</h4>
          <div>
            <input type="text" name="username" placeholder="Username" onChange={e => this.props.setField(e)}/><br />
            <input type="text" name="password" placeholder="Password" onChange={e => this.props.setField(e)}/>
          </div>
          <button onClick={() => this.doLogin()}>SignIn</button>
          <button type="reset">Reset</button>
        </form>
      </section>
    );
  }
}
  
export default connect('username, password', actions)(withRouter(Signin));
