import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import Routes from "./Routes/Routes";
import { ProductsProvider } from "./ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <NavLink to="/">
              <img src="https://cdn.optcentral.com/optportal/logos/3535/logo_bnd_3535.gif" alt="logo"></img>
            </NavLink>
            <Toolbar />
          </header>
          <div className="container">
            <Routes />
          </div>
        </div>
      </Router>
    </ProductsProvider>
  );
}

export default App;
