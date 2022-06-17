import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const housesApi = createApi({
  reducerPath: "housesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getListOfHouses: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
    getDetailOfHouse: builder.query({
      query: (id) => ({
        url: "/id",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetListOfHouses, useGetDetailOfHouse } = housesApi;
