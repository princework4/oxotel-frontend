import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/Auth";
import { formsApi } from "../services/Forms";
import { housesApi } from "../services/Houses";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [formsApi.reducerPath]: formsApi.reducer,
    [housesApi.reducerPath]: housesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      housesApi.middleware,
      formsApi.middleware,
    ),
});

setupListeners(store.dispatch);
