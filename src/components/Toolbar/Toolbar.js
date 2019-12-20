import React, { useState, useEffect } from "react";
import './toolbar.scss';
import {NavLink} from 'react-router-dom'

export default function Toolbar() {

    const [hasError, setErrors] = useState(false);
    const [menus, setMenu] = useState({});

    async function fetchData() {
      const res = await fetch("https://opt-showcase-api-stage.optcentral.com/menuLists?brand_ids=3%2C2%2C46%2C463%2C581%2C50%2C1119%2C145%2C1801%2C2086&retailerId=143&showcase=OOO");
      res
        .json()
        .then(res => setMenu(res))
        .catch(err => setErrors(err));
    }
    console.log(menus.showcasemenus, 'm')
    useEffect(() => {
      fetchData()
    }, [])

  return (
    <div className="toolbar">
      <div className="dropdown">
        <button className="dropbtn">DESIGNERS</button>
      </div>
      <div className="dropdown">
        <button className="dropbtn">EARRINGS</button>
        <div className="dropdown-content">
          <NavLink to="#">Link 1</NavLink>
          <NavLink to="#">Link 2</NavLink>
          <NavLink to="#">Link 3</NavLink>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">RINGS</button>
        <div className="dropdown-content">
          <NavLink to="#">Link 1</NavLink>
          <NavLink to="#">Link 2</NavLink>
          <NavLink to="#">Link 3</NavLink>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">NECKLACES/PENDANTS</button>
        <div className="dropdown-content">
          <NavLink to="#">Link 1</NavLink>
          <NavLink to="#">Link 2</NavLink>
          <NavLink to="#">Link 3</NavLink>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">BRACELETS</button>
        <div className="dropdown-content">
          <NavLink to="#">Link 1</NavLink>
          <NavLink to="#">Link 2</NavLink>
          <NavLink to="#">Link 3</NavLink>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">ACCESSORIES</button>
        <div className="dropdown-content">
          <NavLink to="#">Link 1</NavLink>
          <NavLink to="#">Link 2</NavLink>
          <NavLink to="#">Link 3</NavLink>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">ARCHIVES</button>
        <div className="dropdown-content">
          <NavLink to="#">Link 1</NavLink>
          <NavLink to="#">Link 2</NavLink>
          <NavLink to="#">Link 3</NavLink>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">ABOUT</button>
      </div>
    </div>
  );
}
