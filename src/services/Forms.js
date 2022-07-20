import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const formsApi = createApi({
  reducerPath: "formsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/polls/" }),
  endpoints: (builder) => ({
    addNewRequestCallback: builder.mutation({
      query: (requestCallbackData) => ({
        url: "request_callback/",
        method: "POST",
        body: requestCallbackData,
      }),
    }),
    addNewReserveNow: builder.mutation({
      query: (reserveNowData) => ({
        url: "reserve_now/",
        method: "POST",
        body: reserveNowData,
      }),
    }),
    addNewScheduleMeet: builder.mutation({
      query: (scheduleMeetData) => ({
        url: "schedule_meet/",
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
