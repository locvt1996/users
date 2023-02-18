import { configureStore } from "@reduxjs/toolkit";
import type {} from "redux-thunk/extend-redux";

import rootReducer from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
