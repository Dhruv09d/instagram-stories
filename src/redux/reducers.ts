import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import user from "redux/slices/user";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user"],
};

const userConfig = {
  key: "user",
  storage: storage,
};

const rootReducer = combineReducers({
  routing: routerReducer,
  user: persistReducer(userConfig, user),
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;
