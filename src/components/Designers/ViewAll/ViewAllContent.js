import React, {useState, useEffect} from "react";

export default function ViewAllContent() {
  const [hasError, setErrors] = useState(false);
  const [viewAllDesignes, setViewAllDesignes] = useState([]);
  // const [namesFilter, setNamesFilter] = useState([]);

  async function fetchData(i) {
    const res = await fetch("https://opt-showcase-api-stage.optcentral.com/products?brand_ids=3,2,46,463,581,50,1119,145,1801,2086&limit=24&page=1&retailerId=143&showcase=OOO&sort=pricing.retail;desc&status=Active");
    res
      .json()
      .then(res => setViewAllDesignes(res.data[0]))
      .catch(err => setErrors(err));
  }

  console.log(viewAllDesignes, 'ddd')
  
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="ViewAllContent">
      <div className="designers-header-filters">
        <label>hii</label>
        <button className="btn btn-default">
          <i className="fas fa-list"></i>
        </button>
        <button className="btn btn-default">
          <i className="fas fa-th-large"></i>
        </button>
        <button className="btn btn-default">
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
    </div>
  );
}
