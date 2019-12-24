import React, {useState, useEffect} from "react";
import './viewallcontent.scss'

export default function ViewAllContent() {
  const [hasError, setErrors] = useState(false);
  const [viewAllDesignes, setViewAllDesignes] = useState([]);
  var [mainClass, setMainClass] = useState(("col-md-12 list-view"));


  async function fetchData(i) {
    const res = await fetch("https://opt-showcase-api-stage.optcentral.com/products?brand_ids=3,2,46,463,581,50,1119,145,1801,2086&limit=24&page=1&retailerId=143&showcase=OOO&sort=pricing.retail;desc&status=Active");
    res
      .json()
      .then(res => setViewAllDesignes(res.data))
      .catch(err => setErrors(err));
  }

  
  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <div className="ViewAllContent">
      <div className="designers-header-filters">
        <label>hii</label>
        <button className="btn btn-default" onClick={()=>{setMainClass('col-md-12 list-view')}}>
          <i className="fas fa-list"></i>
        </button>
        <button className="btn btn-default" onClick={()=>{setMainClass('col-md-6 grid-view-large')}} >
          <i className="fas fa-th-large"></i>
        </button>
        <button className="btn btn-default" onClick={()=>{setMainClass('col-md-4 grid-view-small')}}>
          <i className="fas fa-th"></i>
        </button>
        <button className="btn btn-default add-to-wishlist">ADD ALL TO WISHLIST</button>
        <select>
          <option value="">Sort</option>
          <option value="">Sort</option>
          <option value="">Sort</option>
          <option value="">Sort</option>
          <option value="">Sort</option>
          <option value="">Sort</option>
          <option value="">Sort</option>
          <option value="">Sort</option>
          <option value="">Sort</option>
          <option value="">Sort</option>
          <option value="">Sort</option>
        </select>
        <select>
          <option value="">24</option>
          <option value="">24</option>
          <option value="">24</option>
          <option value="">24</option>
        </select>
      </div>
      <div className="row viewall-content-header">
        <div className="col-md-4"></div>
        <div className="col-md-4">Details</div>
        <div className="col-md-2">Price</div>
      </div>
      <div className="row designers-viewall-content">
        {viewAllDesignes.map((designs, key) => {
          return (
            <div key={designs.id} className={mainClass}>
              <img src={designs.images} alt={designs.title}></img>
            </div>
          )
        })}
      </div>
    </div>
  );
}
