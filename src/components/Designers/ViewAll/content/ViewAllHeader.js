import React, { Component } from "react";
import "./viewallcontent.scss";
// import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProducts, changeView } from "../../../../ViewAllAction";

export class ViewAllHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onChangeSort = this.onChangeSort.bind(this);
    this.onChangeLimit = this.onChangeLimit.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(
      fetchProducts(
        this.props.sorted,
        this.props.limit,
        this.props.searching,
        this.props.priceMax,
        this.props.priceMin,
        this.props.brands,
        this.props.category
      )
    );
  }

  onChangeSort(e) {
    this.props.dispatch(
      fetchProducts(
        e.target.value,
        this.props.limit,
        this.props.searching,
        this.props.priceMax,
        this.props.priceMin,
        this.props.brands,
        this.props.category
      )
    );
  }

  onChangeLimit(e) {
    this.props.dispatch(
      fetchProducts(
        this.props.sorted,
        e.target.value,
        this.props.searching,
        this.props.priceMax,
        this.props.priceMin,
        this.props.brands,
        this.props.category
      )
    );
  }

  render() {
    var productslength = this.props.products.length;

    return (
      <div className="ViewAllContent">
        <div className="designers-header-filters">
          <label>{productslength} items</label>
          <button
            className="btn btn-default"
            onClick={() => {
              this.props.dispatch(changeView("col-md-12 list-view"));
            }}
          >
            <i className="fas fa-list"></i>
          </button>
          <button
            className="btn btn-default"
            onClick={() => {
              this.props.dispatch(changeView("col-md-6 grid-view-large"));
            }}
          >
            <i className="fas fa-th-large"></i>
          </button>
          <button
            className="btn btn-default"
            onClick={() => {
              this.props.dispatch(changeView("col-md-4 grid-view-small"));
            }}
          >
            <i className="fas fa-th"></i>
          </button>
          <button className="btn btn-default add-to-wishlist">
            ADD ALL TO WISHLIST
          </button>
          <select name="sort" onChange={this.onChangeSort}>
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
          <select name="limit" onChange={this.onChangeLimit}>
            <option value="Items per page">Items per page</option>
            <option value="24" selected>
              24
            </option>
            <option value="48">48</option>
            <option value="72">72</option>
          </select>
        </div>
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

export default connect(mapStateToProps)(ViewAllHeader);
