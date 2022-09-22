import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_SUCCESS } from "./productType";

export const fetchProductSuccess = (product) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product
  };
};

export const fetchProductFailure = (error) => {
    return {
      type: FETCH_PRODUCT_FAILURE,
      payload: error
    };
  };
  


