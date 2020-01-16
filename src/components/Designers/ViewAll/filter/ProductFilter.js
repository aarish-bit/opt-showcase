import React from "react";
import { connect } from "react-redux";
import { Collapse, CardBody, Card } from "reactstrap";
import { fetchProducts, filterReset } from "./../../../../ViewAllAction";
import "./viewallfilter.scss";
// import _ from "lodash";

class ProductFilter extends React.Component {
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
    this.handleShopByBrand = this.handleShopByBrand.bind(this);
    this.handleShopByCategories = this.handleShopByCategories.bind(this);
    this.handleShopByName = this.handleShopByName.bind(this);
    this.handleShopByPrice = this.handleShopByPrice.bind(this);
    // this.handleFilterReset = this.handleFilterReset.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  // handleFilterReset() {
  //   var sorted = "pricing.retail;asc";
  //   var limit = "24";
  //   var searching = "";
  //   var priceMin = "";
  //   var priceMax = "";
  //   var brands = "";
  //   var category = "";
  //   this.props.dispatch(
  //     filterReset(
  //       sorted,
  //       limit,
  //       searching,
  //       priceMin,
  //       priceMax,
  //       brands,
  //       category
  //     )
  //   );
  // }

  handleShopByName(e) {
    var Searchtext = document.getElementById("searchBykeyword").value;
    this.props.dispatch(
      fetchProducts(
        this.props.sorted,
        this.props.limit,
        Searchtext,
        this.props.priceMax,
        this.props.priceMin,
        this.props.brands,
        this.props.category,
        this.props.page
      )
    );
  }

  handleShopByPrice(e) {
    var maxPrice = document.getElementById("maximum").value;
    var minPrice = document.getElementById("minimum").value;
    this.props.dispatch(
      fetchProducts(
        this.props.sorted,
        this.props.limit,
        this.props.searching,
        maxPrice,
        minPrice,
        this.props.brands,
        this.props.category,
        this.props.page
      )
    );
  }

  handleShopByBrand(e) {
    this.props.dispatch(
      fetchProducts(
        this.props.sorted,
        this.props.limit,
        this.props.searching,
        this.props.priceMax,
        this.props.priceMin,
        e.target.textContent,
        this.props.category,
        this.props.page

      )
    );
  }

  handleShopByCategories(e) {
    this.props.dispatch(
      fetchProducts(
        this.props.sorted,
        this.props.limit,
        this.props.searching,
        this.props.priceMax,
        this.props.priceMin,
        this.props.brands,
        e.target.textContent,
        this.props.page
      )
    );
  }

  render() {
    var { isOpen1, isOpen2, isOpen3, isOpen4, isOpen5, isOpen6 } = this.state;
    const { products } = this.props;

    var brandsort = products.map(brands => {
      return brands.brand.name;
    });
    var brandsorted = [...new Set(brandsort)];

    var categoriessort = products.map(category => {
      return category.categories[0].name;
    });
    var categorysort = [...new Set(categoriessort)];

    var coloursort = products.map(color => {
      return color.attributes["Gemstone Color"];
    });
    var colorsort = [...new Set(coloursort)];
    // console.log(colorsort, 'color')

    var stoneesort = products.map(stone => {
      return stone.attributes["Gemstone Type"];
    });
    var stonesort = [...new Set(stoneesort)];

    var metallsort = products.map(metal => {
      return metal.attributes.Metal;
    });
    var metalsort = [...new Set(metallsort)];

    var OOOsortt = products.map(OOOtype => {
      return OOOtype.attributes["OOO Type"];
    });
    var OOOsort = [...new Set(OOOsortt)];

    return (
      <section className="ViewAllFilters">
        <span className="reset-filter"  >
          RESET FILTER
        </span>
        <div className="shop-by-keyword">
          <label>SHOP BY KEYWORD</label>
          <span>
            <input
              type="text"
              id="searchBykeyword"
              placeholder="enter search term(s)"
              className="name-block"
            />
            <button
              className="btn btn-default name-btn"
              onClick={this.handleShopByName}
            >
              <i className="fas fa-search"></i>
            </button>
          </span>
        </div>
        <div className="shop-by-price">
          <label>SHOP BY PRICE</label>
          <div className="">
            <span className="col-md-1">$</span>
            <span className="col-md-4">
              <input
                type="text"
                className="price-block"
                id="minimum"
                required
              />
            </span>
            <span className="col-md-1">-$</span>
            <span className="col-md-4">
              <input
                type="text"
                className="price-block"
                id="maximum"
                required
              />
            </span>
            <span className="col-md-2">
              <button
                className="btn btn-default"
                onClick={this.handleShopByPrice}
              >
                GO
              </button>
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
                <ul>
                  {brandsorted.map((brands, key) => {
                    // console.log("brandsss:", brands)
                    return (
                      <div className="reset-filter">
                        <li
                          key={brands.id}
                          value={brands}
                          onClick={this.handleShopByBrand}
                        >
                          {brands}
                        </li>
                      </div>
                    );
                  })}
                </ul>
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
                <ul>
                  {categorysort.map((category, key) => {
                    return (
                      <div className="reset-filter">
                        <li
                          key={category.id}
                          value={category}
                          onClick={this.handleShopByCategories}
                        >
                          {category}
                        </li>
                      </div>
                    );
                  })}
                </ul>
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
    limit: state.limit,
    searching: state.searching,
    priceMin: state.priceMin,
    priceMax: state.priceMax,
    brands: state.brands,
    category: state.category
  };
};

export default connect(mapStateToProps)(ProductFilter);
