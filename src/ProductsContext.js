import React, { Component,createContext } from 'react'

export const ProductsContext = createContext()

export class ProductsProvider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       error:null,
       isLoaded:false,
       products:[]
    }
  }

  componentDidMount() {
    let qs = "status=Active";
    // if (sortBy) qs = qs + "&sort=" + sortBy;
    // if (Limit) qs = qs + "&limit=" + Limit;
    // if (Page) qs = qs + "&Page=" + Page;
    // qs =
    //   sortBy === undefined && Limit === undefined
    //     ? qs + "&sort=pricing.retail;asc&limit=24"
    //     : qs;

    fetch(
      "https://opt-showcase-api.optcentral.com/products?" + qs 
    )
    .then(res => res.json())
    .then(
      json => {
        this.setState({
          isLoaded: true,
          products: json.data,
        });
      },
      error => ({
        isLoaded: true,
        error
      })
    )
    }
  
  
  render() {
    const { error, isLoaded, products} = this.state;
    return (
     <ProductsProvider>
       {this.state.children}
     </ProductsProvider>
    )
  }
}

export default ProductsProvider
