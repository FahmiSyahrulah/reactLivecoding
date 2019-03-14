import React, { Component } from 'react';
import axios from 'axios';
import { connect} from "unistore/react";
import {actions} from "../Store";
import {withRouter} from "react-router-dom";
import Romance from './Romance';

const initialState = {
    listMovies: []
};
const baseUrl = "https://api-todofancy.herokuapp.com/api/movies";

class AppAjax extends Component {

    componentDidMount = () => {
        const self = this;
        axios 
        .get(baseUrl)
        .then(function(response){
            self.setState({listMovies: response.data.movies});
            console.log("ceeeekkkk", response.data.movies);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    render(){
        return(
            <div className="App">
                <div class="row">
                    <div class = "col-md-8">    
                        {this.listMovies.map((movies, key) => {
                            const src_img = movies.Poster
                            const content = movies.Synopsis
                            return <Romance key={key} title={movies.title} img={src_img} content={content} category={movies.category} />;
                        })}
                    </div>
                </div>
        </div>
        );
    }
}
export default AppAjax;