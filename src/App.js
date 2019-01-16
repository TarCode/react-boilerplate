import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Routes/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
