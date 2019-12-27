import React from "react";
import './viewallfilter.scss'

export default function ViewAllFilters() {
  return (
    <section className="ViewAllFilters">
      <span className="reset-filter">RESET FILTER</span>
      <div className="shop-by-keyword">
        <label>SHOP BY KEYWORD</label>
        <span>
          <input type="text" placeholder="enter search term(s)" className="name-block"/>
          <button className="btn btn-default name-btn">
            <i className="fas fa-search"></i>
          </button>
        </span>
      </div>
      <div className="shop-by-price">
        <label>SHOP BY PRICE</label>
        <div>
          <span className="">$</span>
          <span><input type="text" className="price-block" /></span>
          <span>-$</span>
          <span><input type="text" className="price-block" /></span>
          <span><button className="btn btn-default">GO</button></span>
        </div>
      </div>
    </section>
  );
}