import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: "",
        method: "POST",
        body: loginData,
      }),
    }),
    register: builder.mutation({
      query: (registerData) => ({
        url: "",
        method: "POST",
        body: registerData,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
