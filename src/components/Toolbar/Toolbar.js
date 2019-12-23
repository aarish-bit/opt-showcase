import React from "react";
import './toolbar.scss';
import {NavLink} from 'react-router-dom'

export default function Toolbar() {
  return (
    <div className="toolbar">
      <div className="dropdown">
        <NavLink to="/designers" className="dropbtn">DESIGNERS</NavLink>
      </div>
      <div className="dropdown">
        <NavLink to="#" className="dropbtn">EARRINGS</NavLink>
        <div className="dropdown-content">
          <NavLink to="#">Link 1</NavLink>
          <NavLink to="#">Link 2</NavLink>
          <NavLink to="#">Link 3</NavLink>
        </div>
      </div>
      <div className="dropdown">
        <NavLink to="#" className="dropbtn">RINGS</NavLink>
        <div className="dropdown-content">
          <NavLink to="#">Link 1</NavLink>
          <NavLink to="#">Link 2</NavLink>
          <NavLink to="#">Link 3</NavLink>
        </div>
      </div>
      <div className="dropdown">
        <NavLink to="#" className="dropbtn">NECKLACES/PENDANTS</NavLink>
        <div className="dropdown-content">
          <NavLink to="#">Link 1</NavLink>
          <NavLink to="#">Link 2</NavLink>
          <NavLink to="#">Link 3</NavLink>
        </div>
      </div>
      <div className="dropdown">
        <NavLink to="#" className="dropbtn">BRACELETS</NavLink>
        <div className="dropdown-content">
          <NavLink to="#">Link 1</NavLink>
          <NavLink to="#">Link 2</NavLink>
          <NavLink to="#">Link 3</NavLink>
        </div>
      </div>
      <div className="dropdown">
        <NavLink to="#" className="dropbtn">ACCESSORIES</NavLink>
        <div className="dropdown-content">
          <NavLink to="#">Link 1</NavLink>
          <NavLink to="#">Link 2</NavLink>
          <NavLink to="#">Link 3</NavLink>
        </div>
      </div>
      <div className="dropdown">
        <NavLink to="#" className="dropbtn">ARCHIVES</NavLink>
        <div className="dropdown-content">
          <NavLink to="#">Link 1</NavLink>
          <NavLink to="#">Link 2</NavLink>
          <NavLink to="#">Link 3</NavLink>
        </div>
      </div>
      <div className="dropdown">
        <NavLink to="#" className="dropbtn">ABOUT</NavLink>
      </div>
    </div>
  );
}
