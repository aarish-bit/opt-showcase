export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const  SORT_PRODUCTS = "SORT_PRODUCTS";
export const SORT_PRODUCTS_NUM = "SORT_PRODUCTS_NUM";

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  
  export const fetchProductsSuccess = (products, sortBy, Limit) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { products, sortBy, Limit }
  });
  
  export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
  });

  export const SortProducts = query => ({
    type: SORT_PRODUCTS,
    payload:{query}
  });

  // export const SortProductsNum = query => ({
  //   type: SORT_PRODUCTS_NUM,
  //   payload:{query}
  // });
  
  

 export function fetchProducts(sortBy, Limit, Page) {
   console.log("sortBy:", sortBy, "Limit:", Limit)
  return dispatch => {
    dispatch(fetchProductsBegin());
    var query = fetch;
    var qs = "https://opt-showcase-api.optcentral.com/products?status=Active";
    if (sortBy) qs = qs + "&sort=" + sortBy;
    if (Limit) qs = qs + "&limit=" + Limit;
    if (Page) qs = qs + "&Page=" + Page;
    qs = sortBy === undefined && Limit === undefined? qs + "&sort=pricing.retail;asc&limit=24": qs;

    return query(qs)
      .then(handleErrors)
      .then(res => res.json())
      .then(res => {
        console.log(res.data)
        dispatch(fetchProductsSuccess(res.data, sortBy, Limit));
        return res.data;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  
  };
}
  
  // export function handleSort(e, query) {
  //   return dispatch => {
  //    dispatch(SortProducts());
  //    let sort = e.target.value;
  //    console.log(sort, 'eee')
  //    query(sort);
  //   }
  // }

  // export function handleProductsNum(e) {
  //   return dispatch => {
  //   dispatch(SortProductsNum());
  //    var limit = e.target.value;
  //   // console.log(limit, "limit");
  //   fetchProductsBegin(sort, limit);
  //   }
  // }
  

