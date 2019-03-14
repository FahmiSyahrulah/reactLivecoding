import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import { connect} from "unistore/react";
import {actions} from "../Store";
import {withRouter} from "react-router-dom";


class Profile extends Component {
    render(){
    if (!this.props.isLogin) {
        return <Redirect to={{
                pathname: "/signin"
            }}/>;
    } else {
        return (
            <section>
                <h1>PROFILE</h1>
                <p>
                    <label>Email:</label>
                    {this.props.email}
                </p>
                <p>
                    <label>Full Name:</label>
                    {this.props.full_name}
                </p>
            </section>
        );
    }
    }
};

export default connect('isLogin, email, full_name', actions)(withRouter(Profile));