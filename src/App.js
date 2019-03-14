import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Content from './component/Content';
import Romance from './component/Romance';
import movieContainer from './component/movieContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Content />// */}
        <movieContainer />
      </div>
    );
  }
}

export default App;
