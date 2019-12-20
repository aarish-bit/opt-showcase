import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src="./logo/logo.gif" alt="logo"></img>
        <Toolbar />
      </header>
      <div className="container">
        <Homepage />
      </div>
    </div>
    </Router>
  );
}

export default App;
