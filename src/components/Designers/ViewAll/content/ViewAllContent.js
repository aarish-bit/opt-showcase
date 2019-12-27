import React, { useState, useEffect } from "react";
import "./viewallcontent.scss";

export default function ViewAllContent() {
  var [mainClass, setMainClass] = useState("col-md-4 grid-view-small");
  const [hasError, setErrors] = useState(false);
  var [viewAllDesignes, setViewAllDesignes] = useState([]);
  var [sort, setSort] = useState('pricing.retail;asc');
  var [limit, setLimit] = useState('24');

  
  async function fetchData(sortBy, Limit, Page) {
    console.log(sortBy, "sort");
    let qs = "status=Active"
    if(sortBy && Limit && Page) qs = qs + "&sort="+sortBy
    if(Limit) qs = qs + "&limit="+Limit
    if(Page) qs = qs + "&Page="+Page
    qs = (sortBy === undefined && Limit === undefined) ? qs+'&sort=pricing.retail;asc&limit=24' : qs;

    const res = await fetch(
      "https://opt-showcase-api.optcentral.com/products?"+qs
    );
    res
      .json()
      .then(res => setViewAllDesignes(res.data))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);


  function handleSort(e) {
    sort = e.target.value;
    fetchData(sort,limit);
  }

  function handleProductsNum(e) {
    limit = e.target.value;
    console.log(limit, "limit");
    fetchData(sort,limit);
  }


  var setAlignOrder = "column";
  if (mainClass === "col-md-12 list-view") {
    setAlignOrder = "row";
  }

  var setHeadDisplays = "row list-header-hidden";
  if (mainClass === "col-md-12 list-view") {
    setHeadDisplays = "row list-header";
  }

  var setDesignerDetails = "col-md-12 grid-designers-details";
  if (mainClass === "col-md-12 list-view") {
    setDesignerDetails = "col-md-5 list-designers-details";
  }

  var setDesignerImage = "col-md-12 grid-designers-details";
  if (mainClass === "col-md-12 list-view") {
    setDesignerImage = "col-md-5 list-designers-details";
  }

  var setDesignerPrice = "col-md-12 grid-designers-details";
  if (mainClass === "col-md-12 list-view") {
    setDesignerPrice = "col-md-2 designers-price";
  }

  var setWishListText = "Wishlist";
  if (mainClass === "col-md-12 list-view") {
    setWishListText = "ADD TO WISHLIST";
  }

  var setOrderText = "Order";
  if (mainClass === "col-md-12 list-view") {
    setOrderText = "ORDER";
  }

  var productslength = viewAllDesignes.length;
  console.log(productslength, 'jjj')

  

  return (
    <div className="ViewAllContent">
      <div className="designers-header-filters">
        <label>{productslength} items</label>
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
        <select name="sort" onChange={handleSort}>
          <option value="">Sort</option>
          <option value="pricing.retail;asc" selected>Price Low to High</option>
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
        <select name="limit" onChange={handleProductsNum}>
          <option value="Items per page">Items per page</option>
          <option value="24" selected>24</option>
          <option value="48">48</option>
          <option value="72">72</option>
        </select>
      </div>
      <div className={setHeadDisplays}>
        <div className="col-md-4"></div>
        <div className="col-md-6">Details</div>
        <div className="col-md-2">Price</div>
      </div>
      <div className="row designers-viewall-content">
        {viewAllDesignes.map((designs, key) => {
          return (
            <div key={designs.id} className={mainClass}>
              <div className={setAlignOrder}>
                <div className={setDesignerImage}>
                  <img src={designs.images} alt={designs.title}></img>
                  <p>{designs.pricing.retail}</p>
                </div>
                <div className={setDesignerDetails}>
                  <p className="brand-name">
                    <strong>Brand Name: </strong>
                    {designs.brand.name}
                  </p>
                  <p className="style-number">
                    <strong>style #: </strong>
                    {designs.opt.styleNumber}
                  </p>
                  <p className="metal">
                    <strong>Metal: </strong>
                    {designs.attributes.brand_Metals}
                  </p>
                  <p className="ooo-type">
                    <strong>OOO Type: </strong>
                    {designs.attributes["OOO Type"]}
                  </p>
                </div>
                <div className={setDesignerPrice}>
                  <p>
                    <strong>Price Upon Request</strong>
                  </p>
                </div>
              </div>
              <div className="viewall-content-functions">
                <button className="btn btn-default details">
                  MORE DETAILS
                </button>
                <span className="grid-hide-line">|</span>
                <button className="btn btn-default inquire">INQUIRE</button>
                <span className="grid-hide-line">|</span>
                <button className="btn btn-default wishlist">
                  {setWishListText}
                </button>
                <span>|</span>
                <button className="btn btn-default order">
                  {setOrderText}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <ul class="pagination">
        <li>
          <a href="#">1</a>
        </li>
        <li class="active">
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
      </ul>
    </div>
  );
}