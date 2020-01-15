export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const CHANGE_VIEW = "CHANGE_VIEW";
export const FILTER_RESET = "FILTER_RESET";

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

  
export function fetchProducts(sortBy, Limit, search, maxPrice, minPrice, Brand, categories) {
  return dispatch => {
    dispatch(fetchProductsBegin());
    var query = fetch;
    var qs = "https://opt-showcase-api.optcentral.com/products?status=Active";
    if (sortBy) qs = qs + "&sort=" + sortBy;
    if (Limit) qs = qs + "&limit=" + Limit;
    if (search) qs = qs + "&search=" + search;
    if (maxPrice) qs = qs + "&price_max=" + maxPrice;
    if (minPrice) qs = qs + "&price_min=" + minPrice;
    if (Brand) qs = qs + "&brands[0]=" + Brand;
    if (categories) qs = qs + "&categories[0]=" + categories;
    // if (Page) qs = qs + "&Page=" + Page;
    qs = sortBy === undefined && Limit === undefined? qs + "&sort=pricing.retail;asc&limit=24": qs;

    return query(qs)
      .then(handleErrors)
      .then(res => res.json())
      .then(res => {
        dispatch(fetchProductsSuccess(res.data, sortBy, Limit, search, maxPrice, minPrice, Brand, categories));
        return res.data;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));  
  };
}

  
export const fetchProductsSuccess = (products, sortBy, Limit, search, maxPrice, minPrice, Brand, categories) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products, sortBy, Limit, search, maxPrice, minPrice, Brand, categories }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});


export const changeView = (mainClass) => ({
  type: CHANGE_VIEW,
  payload:{mainClass}
})

export const filterReset = (products, sortBy, Limit, search, maxPrice, minPrice, Brand, categories) => ({
  type: FILTER_RESET,
  payload: { products, sortBy, Limit, search, maxPrice, minPrice, Brand, categories }
});

