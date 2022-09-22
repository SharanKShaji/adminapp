import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_SUCCESS } from "./productType";

const initialState = {
  cart: [],
  error: "",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        error: "",
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        product: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
