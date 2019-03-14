import React, { Component } from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect} from "unistore/react";
import {actions} from "../Store";

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <div className="container">
                <div className="row justify-content-md-between">
                    <div className="mt-md-2 offset-4 col-6 offset-md-0 col-md-4">
                        <img className="img-logo" src={require('../logo.svg')} alt=""/>
                        <span>MovieMaxx</span>
                    </div>
                    <div className="mb-1 mt-md-4 col-md-4">
                        <ul id="main-nav" className="nav nav-justified">
                            <li className="nav-item">
                            <Link to="/home">HOME</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/profile">PROFILE</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/signin">LOGIN</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" onClick={() => this.props.postLogout()}>LOGOUT</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </header>
      </div>
    );
  }
}

export default connect(actions)(withRouter(Header));