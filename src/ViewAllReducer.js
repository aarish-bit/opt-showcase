import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SORT_PRODUCTS
} from "./ViewAllAction";

const initialState = {
  items: [],
  loading: false,
  error: null,
  sorted: 'pricing.retail;asc',
  limit: '24'
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
      console.log('action',action.payload)
      return {
        ...state,
        loading: false,
        items: action.payload.products,
        sorted:action.payload.sortBy,
        limit:action.payload.Limit,
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
}
