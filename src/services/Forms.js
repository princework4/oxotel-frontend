import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const formsApi = createApi({
  reducerPath: "formsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    addNewRequestCallback: builder.mutation({
      query: (requestCallbackData) => ({
        url: "",
        method: "POST",
        body: requestCallbackData,
      }),
    }),
    addNewReserveNow: builder.mutation({
      query: (reserveNowData) => ({
        url: "",
        method: "POST",
        body: reserveNowData,
      }),
    }),
    addNewScheduleMeet: builder.mutation({
      query: (scheduleMeetData) => ({
        url: "",
        method: "POST",
        body: scheduleMeetData,
      }),
    }),
  }),
});

export const {
  useAddNewRequestCallbackMutation,
  useAddNewReserveNowMutation,
  useAddNewScheduleMeetMutation,
} = formsApi;
