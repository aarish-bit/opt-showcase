import React, { useState, useEffect } from "react";
import "./designers.scss";
import { NavLink } from "react-router-dom";
// import _ from 'lodash'

export default function Designers() {
  // const [hasError, setErrors] = useState(false);
  const [designerFilter, setDesignFilter] = useState([]);
  // const [namesFilter, setNamesFilter] = useState([]);



  async function fetchData(i) {
    const res = await fetch("https://opt-showcase-api-stage.optcentral.com/brands?brand_ids=3%2C2%2C46%2C463%2C581%2C50%2C1119%2C145%2C1801%2C2086&retailerId=143&showcase=OOO&status=Active");
    res
      .json()
      .then(res => setDesignFilter(res))
      // .catch(err => setErrors(err));
  }

  // console.log(designerFilter, 'm')
  designerFilter.sort((a,b) => (a.name > b.name) ? 1 : -1);

  // var namesFilter = designerFilter.map((names)=> { return names.name})
  // console.log(namesFilter, 'vvv')

  // var firstLetter = namesFilter.map((letter) => { return letter.charAt(0) });
  // console.log(firstLetter, 'kkk')

  // var filterletter = _.uniq(firstLetter);
  // console.log(filterletter, 'fff')
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="designers">
      <h2>
        <strong>Our Designers</strong>
      </h2>
      <hr className="hr" />
      <div className="row designer-content">
        <div className="col-md-4 col-xs-12 designer-filter">
          <h5>DESIGNERS A-Z</h5>
          <div className="designer-filter-options">
            <span onClick={(e) => { window.scrollTo(0,100)}}>A</span>
            <span onClick={(e) => { window.scrollTo(0,200)}}>E</span>
            <span onClick={(e) => { window.scrollTo(0,300)}}>G</span>
            <span onClick={(e) => { window.scrollTo(0,450)}}>K</span>
            <span onClick={(e) => { window.scrollTo(0,600)}}>S</span>
          </div>
          <div className="designer-filter-options">
            <span onClick={(e) => { window.scrollTo(0,700)}}>T</span>
            <NavLink to="/designers/ViewAll" className="viewall">VIEW ALL</NavLink>
          </div>
        </div>
        <div className="col-md-8 col-xs-12">
          { designerFilter.map((dfilter, key) => {
            return(
              <div key={dfilter._id} className="filtered-names">
                <label className="filtered-names-head">{dfilter.name.charAt(0)}</label>
                <label>{dfilter.name}</label>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
