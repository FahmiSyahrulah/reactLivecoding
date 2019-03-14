import React, {Component} from "react";
import Mainroute from "./Mainroute/MainRoute";
import {withRouter} from "react-router-dom";
import Header from "./component/Header";

class Ajax extends Component{
    postSignout = () => {
        localStorage.removeItem("is_login");
        this.props.history.push("/");
    }
    render(){
        return(
            <div>
                <Header postSignout={this.postSignout}/>
                <Mainroute />
            </div>
        )
    }
}

export default withRouter(Ajax)