import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  CHANGE_VIEW
} from "./ViewAllAction";

const initialState = {
  items: [],
  loading: false,
  error: null,
  sorted: 'pricing.retail;asc',
  limit: '24',
  searching: '',
  priceMin: '',
  priceMax: '',
  brands: '',
  category: '',
  mainClass: "col-md-4 grid-view-small"
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.products,
        sorted:action.payload.sortBy,
        limit:action.payload.Limit,
        searching: action.payload.search,
        priceMin: action.payload.minPrice,
        priceMax: action.payload.maxPrice,
        brands:action.payload.Brand,
        category:action.payload.categories,
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    
    case CHANGE_VIEW:
      return {
        ...state,
          mainClass:action.payload.mainClass
      }; 
    default:
      return state;
  }
}
