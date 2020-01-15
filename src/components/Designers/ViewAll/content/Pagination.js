import React, { Component } from "react";
import "./viewallcontent.scss";
import { connect } from "react-redux";

export class Pagination extends Component {
  render() {
    return (
      <div className="pagination">
        <span>
          <strong><i className="fas fa-angle-double-left"></i> previous page</strong>
        </span>
        <span>|</span>
        <span>page</span>
        <span>|</span>
        <span>48-191</span>
        <span>|</span>
        <span>
          <strong>next page <i className="fas fa-angle-double-right"></i></strong>
        </span>
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


export default connect(mapStateToProps)(Pagination);
