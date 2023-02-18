import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import type {} from "redux-thunk/extend-redux";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
