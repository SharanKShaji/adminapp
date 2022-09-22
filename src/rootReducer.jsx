import { combineReducers } from "redux";
import productReducer from "./components/Redux/Product/productReducer"
export const rootReducer=combineReducers({productReducer})