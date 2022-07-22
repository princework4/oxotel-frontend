import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dropDownApi = createApi({
  reducerPath: "dropDownApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/polls/" }),
  endpoints: (builder) => ({
    getListOfCity: builder.query({
      query: () => ({
        url: "city/",
        method: "GET",
      }),
    }),
    getListOfLocality: builder.query({
      query: () => ({
        url: "house/",
        method: "GET",
      }),
    }),
    getListOfDuration: builder.query({
      query: () => ({
        url: "house/",
        method: "GET",
      }),
    }),
    getListOfOccupancy: builder.query({
      query: () => ({
        url: "house/",
        method: "GET",
      }),
    }),
    getListOfGender: builder.query({
      query: () => ({
        url: "gender/",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetListOfCityQuery,
  useGetListOfLocalityQuery,
  useGetListOfDurationQuery,
  useGetListOfOccupancyQuery,
  useGetListOfGenderQuery,
} = dropDownApi;
