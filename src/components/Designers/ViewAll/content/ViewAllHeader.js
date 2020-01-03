import React, {useState} from "react";
import './viewallcontent.scss'

export default function ViewAllHeader(props) {
  var [mainClass, setMainClass] = useState("col-md-4 grid-view-small");
  return (
    <div className="designers-header-filters">
      <label>{props.productslength} items</label>
      <button
        className="btn btn-default"
        onClick={() => {
         setMainClass("col-md-12 list-view");
        }}
      >
        <i className="fas fa-list"></i>
      </button>
      <button
        className="btn btn-default"
        onClick={() => {
         setMainClass("col-md-6 grid-view-large");
        }}
      >
        <i className="fas fa-th-large"></i>
      </button>
      <button
        className="btn btn-default"
        onClick={() => {
         setMainClass("col-md-4 grid-view-small");
        }}
      >
        <i className="fas fa-th"></i>
      </button>
      <button className="btn btn-default add-to-wishlist">
        ADD ALL TO WISHLIST
      </button>
      <select name="sort" onChange={props.handleSort}>
        <option value="">Sort</option>
        <option value="pricing.retail;asc" selected>
          Price Low to High
        </option>
        <option value="pricing.retail;desc">Price High to Low</option>
        <option value="company.optName;asc">Brands A to Z</option>
        <option value="company.optName;desc">Brands Z to A</option>
        <option value="attributes.brand_Collection;asc">
          Collection A to Z
        </option>
        <option value="attributes.brand_Collection;desc">
          Collection Z to A
        </option>
        <option value="opt.styleNumber;asc">Style # A to Z </option>
        <option value="opt.styleNumber;desc">Style # Z to A </option>
        <option value="categories.name;asc">Category A to Z</option>
        <option value="categories.name;desc">Category Z to A</option>
      </select>
      <select name="limit" onChange={props.handleProductsNum}>
        <option value="Items per page">Items per page</option>
        <option value="24" selected>
          24
        </option>
        <option value="48">48</option>
        <option value="72">72</option>
      </select>
    </div>
  );
}
