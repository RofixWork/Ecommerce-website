import { createStore, combineReducers } from "redux";
import ProductsReducer from "./reducers/ProductsReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import CartReducer from "./reducers/CartReducer";
const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
