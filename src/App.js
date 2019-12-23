import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import Toolbar from './components/Toolbar/Toolbar';
import Routes from './Routes/Routes';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <NavLink to="/"><img src="./logo/logo.gif" alt="logo"></img></NavLink>
        <Toolbar />
      </header>
      <div className="container">
        <Routes />
      </div>
    </div>
    </Router>
  );
}

export default App;
