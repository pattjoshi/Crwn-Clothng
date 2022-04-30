import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// This is a  local storage for browssesr
import UserReducer from "./user/UserReducer";
import cardReducer from "./cart/CartReducer";
import directoryReducer from "./directory/DirectoryReducer";

import shopReducer from "./shop/ShopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: UserReducer,
  cart: cardReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);

// Key:- is reprisent slice of invisual state

// Redux use a single root reducer function that accepts all reducers to  combine in a single reducer
