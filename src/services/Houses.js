import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const housesApi = createApi({
  reducerPath: "housesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/polls/" }),
  endpoints: (builder) => ({
    getListOfHouses: builder.query({
      query: () => ({
        url: "houses/",
        method: "GET",
      }),
    }),
    getDetailOfHouse: builder.query({
      query: (id) => ({
        url: `houses/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetListOfHousesQuery, useGetDetailOfHouseQuery } = housesApi;
