import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const housesApi = createApi({
  reducerPath: "housesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASEURL}` }),
  endpoints: (builder) => ({
    getListOfHouses: builder.query({
      query: (page) => ({
        url: `houses/?page=${page}`,
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
    filterWithAll: builder.query({
      query: (data) => {
        return {
          url:
            data.sortByPrice && data.filterByGender
              ? `all_filter/?price=${data.sortByPrice}&gender=${data.filterByGender}`
              : data.sortByPrice && !data.filterByGender
              ? `all_filter/?price=${data.sortByPrice}`
              : !data.sortByPrice && data.filterByGender
              ? `all_filter/?gender=${data.filterByGender}`
              : "",
          method: "GET",
        };
      },
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
  useFilterWithAllQuery,
} = housesApi;
