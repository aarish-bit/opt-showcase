import React, { Component } from 'react'
import ProductList from "./content/ProductList";
import ProductFilter from './filter/ProductFilter';
import  ViewAllHeader  from './content/ViewAllHeader';


export class DesignersViewAll extends Component {
  render() {
    return (
      <div className="row DesignersViewAll">
      <div className="col-md-3 col-xs-12">
       <ProductFilter />
      </div>
      <div className="col-md-9 col-xs-12">
        <ViewAllHeader /> 
        <ProductList />
      </div>
    </div>
    )
  }
}

export default DesignersViewAll

