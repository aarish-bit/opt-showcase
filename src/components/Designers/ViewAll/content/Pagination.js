import React, { Component } from "react";
import "./viewallcontent.scss";
import { fetchProducts } from "./../../../../ViewAllAction";
import { connect } from "react-redux";

export class Pagination extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          
       }
       this.changeNextPage = this.changeNextPage.bind(this);
       this.changePrevPage = this.changePrevPage.bind(this);
     }
     

   changeNextPage(e){
      // console.log("val", this.props.page)
      this.props.dispatch(
         fetchProducts(
           this.props.sorted,
           this.props.limit,
           this.props.searching,
           this.props.priceMax,
           this.props.priceMin,
           this.props.brands,
           this.props.category,
           this.props.page + 1,
         )
       )
 }

 changePrevPage(e){
  // console.log("val", e.target)
  this.props.dispatch(
     fetchProducts(
       this.props.sorted,
       this.props.limit,
       this.props.searching,
       this.props.priceMax,
       this.props.priceMin,
       this.props.brands,
       this.props.category,
       this.props.page - 1,
     )
   )
}

  render() {
    const {products, page, total} = this.props;

    var productslength = products.length;

    // console.log("page", total)
    return (
      <ul className="pagination">
        <li onClick={this.changePrevPage}>
          <strong><i className="fas fa-angle-double-left"></i> previous page</strong>
        </li>
        <li>|</li>
        <li>page {page}</li>
        <li>|</li>
        <li>{productslength} of {total}</li>
        <li>|</li>
        <li onClick={this.changeNextPage}>
          <strong >next page<i className="fas fa-angle-double-right"></i></strong>
        </li>
      </ul>
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
    page: state.page,
    total:state.total,
    mainClass: state.mainClass
  };
};


export default connect(mapStateToProps)(Pagination);
