import React, {Component} from 'react';
import './Romance.css';
import axios from "axios";
import { connect} from "unistore/react";
import {actions} from "../Store";
import {withRouter} from "react-router-dom";


class Romance extends Component {

    render() {
        return (
        <div className="App">
                <div className="container">
                    <div className="row">
                    <img className="card-img-top" src={this.props.img} alt="Card image cap"/>
                        <div className="card">
                        <h5 className="title">{this.props.title}</h5>
                            <div className="card-body">
                                <p className="card-text">{this.props.synopsis}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        );
  }
}

export default Romance;