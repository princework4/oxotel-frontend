import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/Auth";
import { formsApi } from "../services/Forms";
import { housesApi } from "../services/Houses";
import { dropDownApi } from "../services/DropDown";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [formsApi.reducerPath]: formsApi.reducer,
    [housesApi.reducerPath]: housesApi.reducer,
    [dropDownApi.reducerPath]: dropDownApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      dropDownApi.middleware,
      housesApi.middleware,
      formsApi.middleware,
    ),
});

setupListeners(store.dispatch);
