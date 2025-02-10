import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Type } from "@/shared/entities";

const typeApi = createApi({
  reducerPath: "types",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7079/api" }),
  endpoints: (builder) => ({
    getTypes: builder.query<Type[], { start: number; length: number }>({
      query: ({ start, length }) => ({ url: `/types`, params: { start, length } }),
    }),
    getTypeById: builder.query<Type, string>({
      query: (id) => `/types/${id}`,
    }),
  }),
});

class TypeHooks {
  public static useGet = typeApi.useGetTypesQuery;
  public static useGetById = typeApi.useGetTypeByIdQuery;
}

export { TypeHooks };
export const {
  reducerPath: typeReducerPath,
  reducer: typeReducer,
  middleware: typeMiddleware,
} = typeApi;
