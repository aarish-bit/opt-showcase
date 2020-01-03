import React, { useState,useEffect } from "react";
import { Collapse, CardBody, Card } from 'reactstrap';
import './viewallfilter.scss'
import _ from 'lodash'


export default function ViewAllFilters() {
  const [hasError, setErrors] = useState(false);
  var [viewAllDesignes, setViewAllDesignes] = useState([]);
  var [ShopBrands, setShopBrands] = useState("assael");
  var [ShopCategories, setShopCategories] = useState("");


  async function fetchData(category, brand) {
    let qs = "status=Active";
    // if (category) qs = qs + "&categories[0]=" + category;
    // if (brand) qs = qs + "&brands[0]=" + brand;
    // // if (Page) qs = qs + "&Page=" + Page;
    // qs =
    // brand === undefined && category === undefined
    //     ? qs + "assael"
    //     : qs;

    const res = await fetch(
      "https://opt-showcase-api.optcentral.com/products?" + qs 
    );
    res
      .json()
      .then(res => setViewAllDesignes(res.data))
      .catch(err => setErrors(err));
  }
  console.log(viewAllDesignes, 'vvv')

  useEffect(() => {
    fetchData();
  }, []);

  function handleShopByBrand(e) {
    setShopBrands(e.target.value)
    ShopBrands = e.target.value;
    fetchData(ShopBrands, ShopCategories);
  }
  
  function handleShopByCategories(e) {
    setShopCategories(e.target.value)
    ShopCategories = e.target.value;
    fetchData(ShopBrands, ShopCategories);
  }


  
  var brandsort = viewAllDesignes.map((brands) => {return brands.brand.name});
  // var brandsort = [... new Set(brandsort)]
  
  var categorysort = viewAllDesignes.map((category) => {return category.categories[0].name});
  var categorysort = [... new Set(categorysort)]
  
  var colorsort = viewAllDesignes.map((color) => {return color.attributes["Gemstone Color"]});
  var colorsort = [... new Set(colorsort)]
  // console.log(colorsort, 'color')
  
  var stonesort = viewAllDesignes.map((stone) => {return stone.attributes["Gemstone Type"]});
  var stonesort =  [... new Set(stonesort)]
  
  var metalsort = viewAllDesignes.map((metal) => {return metal.attributes.Metal});
  var metalsort =  [... new Set(metalsort)]

  var OOOsort = viewAllDesignes.map((OOOtype) => {return OOOtype.attributes["OOO Type"]});
  var OOOsort = [... new Set(OOOsort)]


  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const toggle1 = () => setIsOpen1(!isOpen1);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const toggle3 = () => setIsOpen3(!isOpen3);
  const toggle4 = () => setIsOpen4(!isOpen4);
  const toggle5 = () => setIsOpen5(!isOpen5);
  const toggle6 = () => setIsOpen6(!isOpen6);

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
        <div className="">
          <span className="col-md-1">$</span>
          <span className="col-md-4"><input type="text" className="price-block" /></span>
          <span className="col-md-1">-$</span>
          <span className="col-md-4"><input type="text" className="price-block" /></span>
          <span className="col-md-2"><button className="btn btn-default">GO</button></span>
        </div>
      </div>
      <div className="accordian">

      <span className="accordian-content" style={{ marginBottom: '1rem' }}>SHOP ALL</span>
      <span className="accordian-content" onClick={toggle1} style={{ marginBottom: '1rem' }}>SHOP BY BRAND</span>
      <Collapse isOpen={isOpen1}>
        <Card>
          <CardBody>
            {brandsort.map((brands, key) => {
              return(
                <div key={brands.id} className="reset-filter">
                 <span onClick={handleShopByBrand}>{brands}</span>
                </div>
              )
            })}
          </CardBody>
        </Card>
      </Collapse>
      <span className="accordian-content" onClick={toggle2} style={{ marginBottom: '1rem' }}>SHOP BY CATEGORIES</span>
      <Collapse isOpen={isOpen2}>
        <Card>
          <CardBody>
          {categorysort.map((category, key) => {
              return(
                <div className="reset-filter">
                 <span onChange={handleShopByCategories}>{category}</span>
                </div>
              )
            })}
          </CardBody>
        </Card>
      </Collapse>
      <span className="accordian-content" onChange={toggle3} style={{ marginBottom: '1rem' }}>SHOP BY COLOR</span>
      <Collapse isOpen={isOpen3}>
        <Card>
          <CardBody>
        {colorsort.map((color, key) => {
              return(
                <div  className="reset-filter">
                 <span>{color}</span>
                </div>
              )
            })}
          </CardBody>
        </Card>
      </Collapse>
      <span className="accordian-content" onClick={toggle4} style={{ marginBottom: '1rem' }}>SHOP BY STONE</span>
      <Collapse isOpen={isOpen4}>
        <Card>
          <CardBody>
        {stonesort.map((stone, key) => {
              return(
                <div className="reset-filter">
                 <span>{stone}</span>
                </div>
              )
            })}
          </CardBody>
        </Card>
      </Collapse>
      <span className="accordian-content" onClick={toggle5} style={{ marginBottom: '1rem' }}>SHOP BY METAL</span>
      <Collapse isOpen={isOpen5}>
        <Card>
          <CardBody>
        {metalsort.map((metal, key) => {
              return(
                <div className="reset-filter">
                 <span>{metal}</span>
                </div>
              )
            })}
          </CardBody>
        </Card>
      </Collapse>
      <span className="accordian-content" onClick={toggle6} style={{ marginBottom: '1rem' }}>SHOP BY OOO TYPE</span>
      <Collapse isOpen={isOpen6}>
        <Card>
          <CardBody>
        {OOOsort.map((ooo, key) => {
              return(
                <div className="reset-filter">
                 <span>{ooo}</span>
                </div>
              )
            })}
          </CardBody>
        </Card>
      </Collapse>
      </div>
    </section>
  );
}