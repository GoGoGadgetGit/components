import React, { Component } from 'react';
import './App.css';

import Starbar from './Components/Starbar';
import Dropdown from './Components/Dropdown';
import Navbar from './Components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Starbar />
        <Dropdown />
        <Navbar />
      </div>
    );
  }
}

export default App;
