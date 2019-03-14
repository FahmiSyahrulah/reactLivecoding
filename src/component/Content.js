import React, {Component} from 'react';
import './Content.css';

class Content extends Component {
    render() {
        return (
        <div className="App">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="card-content">
                        <h5 className="card-title">ROMANCE</h5>
                            <img className="card-img-top" src={require('../img/romance.jpg')} alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card-content">
                            <h5 className="card-title">ACTION</h5>
                            <img className="card-img-top" src={require('../img/action.jpg')} alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card-content">
                            <h5 className="card-title">FICTION</h5>
                            <img className="card-img-top" src={require('../img/fiction.jpg')} alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card-content">
                            <h5 className="card-title">COMEDY</h5>
                            <img className="card-img-top" src={require('../img/comedy.jpg')} alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make
                                    up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        );
  }
}

export default Content;