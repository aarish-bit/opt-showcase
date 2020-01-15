import React from "react";
import "./viewallcontent.scss";
// import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProducts } from "./../../../../ViewAllAction";
import _ from "lodash";
import  Pagination  from "./Pagination";

class ProductList extends React.Component {

  componentDidMount() {
    this.props.dispatch(
      fetchProducts(
        this.props.sorted,
        this.props.limit,
        this.props.searching,
        this.props.priceMax,
        this.props.priceMin,
        this.props.brands
      )
    );
  }



  render() {
    const { error, loading, products, mainClass } = this.props;
    // console.log("products", products)
    const { searching, priceMin, priceMax, brands, category } = this.props;
    
    var Criteria = [];
    var setAlignOrder = "column";
    var setHeadDisplays = "row list-header-hidden";
    var setDesignerDetails = "col-md-12 grid-designers-details";
    var setDesignerImage = "col-md-12 grid-designers-details";
    var setDesignerPrice = "col-md-12 grid-designers-details";
    var filterCriteria = "filter-criteria-hide";

    if (this.props.mainClass === "col-md-12 list-view") {
      setAlignOrder = "row";
      setHeadDisplays = "row list-header";
      setDesignerDetails = "col-md-5 list-designers-details";
      setDesignerImage = "col-md-5 list-designers-details";
      setDesignerPrice = "col-md-2 designers-price";
    }
    if (
      !_.isEmpty(searching) ||
      !_.isEmpty(priceMin)  ||
      !_.isEmpty(priceMax)  ||
      !_.isEmpty(brands)    ||
      !_.isEmpty(category)
    ) {
      filterCriteria = "filter-criteria-show";
      Criteria.push(searching, priceMin, priceMax, brands, category);
    }

    var myFilterArray = Criteria.filter(Boolean);

    // if (!_.isEmpty(searching)) {
    //   searchCriteria = "search-criteria-show";
    // }else if (!_.isEmpty(priceMin && priceMax)) {
    //   priceCriteria = "price-criteria-show";
    // }else if (!_.isEmpty(brands)) {
    //   brandCriteria = "brand-criteria-show";
    // }else if (!_.isEmpty(category)) {
    //   categoryCriteria = "category-criteria-show";
    // }

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return (
        <div className="loading">
        <div className="Fetching-products" >Fetching products, please wait...</div>
        <div class="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        </div>
      );
    }

    return (
      <div className="ViewAllContent">
        {/* <div className={filterCriteria}>
          <p>
            <strong>CURRENT SEARCH CRITERIA:</strong>
          </p>
          <ul>
            {myFilterArray.map((conditions, key) => {
              return <li>
              {conditions}
              <button>x</button>
              </li>
            })}
          </ul>
        </div> */}
        <div className={setHeadDisplays}>
          <div className="col-md-4"></div>
          <div className="col-md-6">Details</div>
          <div className="col-md-2">Price</div>
        </div>
        <div className="row designers-viewall-content">
          {products.map((designs, key) => {
            return (
              <div key={designs.id} className={mainClass}>
                <div className={setAlignOrder}>
                  <div className={setDesignerImage}>
                    <img src={designs.images} alt={designs.title}></img>
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
                    <i className="fas fa-list-alt"></i>
                    MORE DETAILS
                  </button>
                  <span className="grid-hide-line">|</span>
                  <button className="btn btn-default inquire">
                    <i className="fas fa-question"></i>
                    INQUIRE
                  </button>
                  <span className="grid-hide-line">|</span>
                  <button className="btn btn-default wishlist">
                    <i className="fas fa-heart"></i>
                    ADD TO WISHLIST
                  </button>
                  <span>|</span>
                  <button className="btn btn-default order">
                    <i className="fas fa-shopping-bag"></i>
                    ORDER
                  </button>
                </div>
                <div className="viewall-content-grid-functions">
                  <span>
                    <button className="btn btn-default wishlist">
                      <i className="fas fa-shopping-bag"></i>
                      <label>ORDER</label>
                    </button>
                  </span>
                  <span>
                    <label className="line-between">|</label>
                  </span>
                  <span>
                    <button className="btn btn-default order">
                      <i className="fas fa-heart"></i>
                      <label>WISHLIST</label>
                    </button>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.items,
    loading: state.loading,
    error: state.error,
    sorted: state.sorted,
    limit: state.limit,
    searching: state.searching,
    priceMin: state.priceMin,
    priceMax: state.priceMax,
    brands: state.brands,
    category: state.category,
    mainClass: state.mainClass
  };
};

export default connect(mapStateToProps)(ProductList);
