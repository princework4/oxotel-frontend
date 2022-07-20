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
        url: "reserve/",
        method: "POST",
        body: reserveNowData,
      }),
    }),
    addNewScheduleMeet: builder.mutation({
      query: (scheduleMeetData) => ({
        url: "schedule/",
        method: "POST",
        body: scheduleMeetData,
      }),
    }),
    addPartnerWithUs: builder.mutation({
      query: (partnerWithUsData) => ({
        url: "partner/",
        method: "POST",
        body: partnerWithUsData,
      }),
    }),
  }),
});

export const {
  useAddNewRequestCallbackMutation,
  useAddNewReserveNowMutation,
  useAddNewScheduleMeetMutation,
  useAddPartnerWithUsMutation,
} = formsApi;
