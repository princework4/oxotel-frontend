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
    filterHouseWithState: builder.mutation({
      query: (state) => ({
        url: "state/",
        method: "POST",
        body: state,
      }),
    }),
    filterHouseWithCity: builder.mutation({
      query: (city) => ({
        url: "city/",
        method: "POST",
        body: city,
      }),
    }),
    filterHouseWithGender: builder.mutation({
      query: (gender) => ({
        url: "gender/",
        method: "POST",
        body: gender,
      }),
    }),
    filterHouseWithPrice: builder.mutation({
      query: (price) => ({
        url: "price/",
        method: "POST",
        body: price,
      }),
    }),
  }),
});

export const {
  useGetListOfHousesQuery,
  useGetDetailOfHouseQuery,
  useFilterHouseWithStateMutation,
  useFilterHouseWithCityMutation,
  useFilterHouseWithGenderMutation,
  useFilterHouseWithPriceMutation,
} = housesApi;
