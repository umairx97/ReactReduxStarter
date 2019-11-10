import React, { Component } from 'react';
import logo from './logo.svg';
import StorageManager from 'Services/StorageManager';

class App extends Component {

  componentDidMount() {
    StorageManager.setData("umair")
  }

  render() {
    return (
      <div>
        <img src={logo} alt="React Logo" height="200" />
        <h1>Welcome to starter</h1>
      </div>
    )
  }
}

export default App;
