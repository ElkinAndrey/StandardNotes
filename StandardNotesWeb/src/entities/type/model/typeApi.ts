import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Type } from "@/shared/entities";

const typeApi = createApi({
  reducerPath: "types",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7079/api" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    get: builder.query<Type[], { start: number; length: number }>({
      query: ({ start, length }) => ({ url: `/types`, params: { start, length } }),
      providesTags: (result) => ["Post"],
    }),
    getById: builder.query<Type, string>({
      query: (id) => ({ url: `/types/${id}` }),
    }),
    create: builder.mutation<Type, Type>({
      query: (type) => ({ url: `/types`, method: "POST", body: type }),
      invalidatesTags: ["Post"],
    }),
  }),
});

class TypeHooks {
  public static useGet = typeApi.useGetQuery;
  public static useGetById = typeApi.useGetByIdQuery;
  public static useCreate = typeApi.useCreateMutation;
}

export { TypeHooks };
export const {
  reducerPath: typeReducerPath,
  reducer: typeReducer,
  middleware: typeMiddleware,
} = typeApi;
