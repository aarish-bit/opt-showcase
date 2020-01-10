import React, { Component } from "react";
import { connect } from "react-redux";
import { Collapse, CardBody, Card } from "reactstrap";
import { fetchProducts} from "./../../../../ViewAllAction";
import "./viewallfilter.scss";
import _ from "lodash";

export class ProductFilter extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      isOpen5: false,
      isOpen6: false
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchProducts(this.props.sorted, this.props.limit));
  }

  handleShopByBrand(e) {
    this.props.dispatch(fetchProducts(e.target.value, this.props.limit));
  }

  handleShopByCategories(e) {
    this.props.dispatch(fetchProducts(this.props.sorted, e.target.value));
  }

  render() {
    var { isOpen1, isOpen2, isOpen3, isOpen4, isOpen5, isOpen6 } = this.state;
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return (
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
      );
    }

    var brandsort = products.map(brands => {
      return brands.brand.name;
    });
    // var brandsort = [... new Set(brandsort)]

    var categorysort = products.map(category => {
      return category.categories[0].name;
    });
    var categorysort = [...new Set(categorysort)];

    var colorsort = products.map(color => {
      return color.attributes["Gemstone Color"];
    });
    var colorsort = [...new Set(colorsort)];
    // console.log(colorsort, 'color')

    var stonesort = products.map(stone => {
      return stone.attributes["Gemstone Type"];
    });
    var stonesort = [...new Set(stonesort)];

    var metalsort = products.map(metal => {
      return metal.attributes.Metal;
    });
    var metalsort = [...new Set(metalsort)];

    var OOOsort = products.map(OOOtype => {
      return OOOtype.attributes["OOO Type"];
    });
    var OOOsort = [...new Set(OOOsort)];

    return (
      <section className="ViewAllFilters">
        <span className="reset-filter">RESET FILTER</span>
        <div className="shop-by-keyword">
          <label>SHOP BY KEYWORD</label>
          <span>
            <input
              type="text"
              placeholder="enter search term(s)"
              className="name-block"
            />
            <button className="btn btn-default name-btn">
              <i className="fas fa-search"></i>
            </button>
          </span>
        </div>
        <div className="shop-by-price">
          <label>SHOP BY PRICE</label>
          <div className="">
            <span className="col-md-1">$</span>
            <span className="col-md-4">
              <input type="text" className="price-block" />
            </span>
            <span className="col-md-1">-$</span>
            <span className="col-md-4">
              <input type="text" className="price-block" />
            </span>
            <span className="col-md-2">
              <button className="btn btn-default">GO</button>
            </span>
          </div>
        </div>
        <div className="accordian">
          <span className="accordian-content" style={{ marginBottom: "1rem" }}>
            SHOP ALL
          </span>
          <span
            className="accordian-content"
            onClick={() => {
              this.setState({ isOpen1: !isOpen1 });
            }}
            style={{ marginBottom: "1rem" }}
          >
            SHOP BY BRAND
          </span>
          <Collapse isOpen={isOpen1}>
            <Card>
              <CardBody>
                {brandsort.map((brands, key) => {
                  return (
                    <div key={brands.id} className="reset-filter">
                      <span onClick={handleShopByBrand}>{brands}</span>
                    </div>
                  );
                })}
              </CardBody>
            </Card>
          </Collapse>
          <span
            className="accordian-content"
            onClick={() => {
              this.setState({ isOpen2: !isOpen2 });
            }}
            style={{ marginBottom: "1rem" }}
          >
            SHOP BY CATEGORIES
          </span>
          <Collapse isOpen={isOpen2}>
            <Card>
              <CardBody>
                {categorysort.map((category, key) => {
                  return (
                    <div className="reset-filter">
                      <span onChange={handleShopByCategories}>{category}</span>
                    </div>
                  );
                })}
              </CardBody>
            </Card>
          </Collapse>
          <span
            className="accordian-content"
            onClick={() => {
              this.setState({ isOpen3: !isOpen3 });
            }}
            style={{ marginBottom: "1rem" }}
          >
            SHOP BY COLOR
          </span>
          <Collapse isOpen={isOpen3}>
            <Card>
              <CardBody>
                {colorsort.map((color, key) => {
                  return (
                    <div className="reset-filter">
                      <span>{color}</span>
                    </div>
                  );
                })}
              </CardBody>
            </Card>
          </Collapse>
          <span
            className="accordian-content"
            onClick={() => {
              this.setState({ isOpen4: !isOpen4 });
            }}
            style={{ marginBottom: "1rem" }}
          >
            SHOP BY STONE
          </span>
          <Collapse isOpen={isOpen4}>
            <Card>
              <CardBody>
                {stonesort.map((stone, key) => {
                  return (
                    <div className="reset-filter">
                      <span>{stone}</span>
                    </div>
                  );
                })}
              </CardBody>
            </Card>
          </Collapse>
          <span
            className="accordian-content"
            onClick={() => {
              this.setState({ isOpen5: !isOpen5 });
            }}
            style={{ marginBottom: "1rem" }}
          >
            SHOP BY METAL
          </span>
          <Collapse isOpen={isOpen5}>
            <Card>
              <CardBody>
                {metalsort.map((metal, key) => {
                  return (
                    <div className="reset-filter">
                      <span>{metal}</span>
                    </div>
                  );
                })}
              </CardBody>
            </Card>
          </Collapse>
          <span
            className="accordian-content"
            onClick={() => {
              this.setState({ isOpen6: !isOpen6 });
            }}
            style={{ marginBottom: "1rem" }}
          >
            SHOP BY OOO TYPE
          </span>
          <Collapse isOpen={isOpen6}>
            <Card>
              <CardBody>
                {OOOsort.map((ooo, key) => {
                  return (
                    <div className="reset-filter">
                      <span>{ooo}</span>
                    </div>
                  );
                })}
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.items,
    loading: state.loading,
    error: state.error,
    sorted: state.sorted,
    limit: state.limit
  };
};

export default connect(mapStateToProps)(ProductFilter);
