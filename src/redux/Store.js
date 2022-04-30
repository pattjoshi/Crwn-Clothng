import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./RootReducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
// applyMiddleware :- Redux Middleware allows you to intercept every action sent to the reducer so you can make changes to the action or cancel the action
// logger :- something that is nice for us touse when debugging our redux code
// I don't want our users to lose their carts whenever they refresh, so we are going to leverage one of the benefits of redux by persisting our store object in localstorage using redux-persist.
