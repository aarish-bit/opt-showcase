import React from "react";
import './viewallfilter.scss'

export default function ViewAllFilters() {
  return (
    <div className="ViewAllFilters">
      <span className="reset-filter">RESET FILTER</span>
      <div className="shop-by-keyword">
        <label>SHOP BY KEYWORD</label>
        <span>
          <input type="text" placeholder="enter search term(s)" />
          <button className="btn btn-default">
            <i className="fas fa-search"></i>
          </button>
        </span>
      </div>
      <div className="shop-by-keyword">
        <label>SHOP BY PRICE</label>
        <span>
          <span>$</span>
          <input type="text" className="price-block" />
          <span>-$</span>
          <input type="text" className="price-block" />
          <button className="btn btn-default">GO</button>
        </span>
      </div>
    </div>
  );
}