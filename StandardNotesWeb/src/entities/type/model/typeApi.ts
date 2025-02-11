import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Type } from "@/shared/entities";

const typeApi = createApi({
  reducerPath: "types",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7079/api" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    get: builder.query<Type[], void>({
      query: () => ({ url: `/types` }),
      providesTags: () => ["Post"],
    }),
    create: builder.mutation<Type, Type>({
      query: (type) => ({ url: `/types`, method: "POST", body: type }),
      invalidatesTags: ["Post"],
    }),
    update: builder.mutation<Type, Type>({
      query: (type) => ({ url: `/types/${type.id}`, method: "PUT", body: type }),
      invalidatesTags: ["Post"],
    }),
    remove: builder.mutation<Type, string>({
      query: (id) => ({ url: `/types/${id}`, method: "DELETE" }),
      invalidatesTags: ["Post"],
    }),
  }),
});

class TypeHooks {
  public static useGet = () =>
    typeApi.useGetQuery(undefined, {
      pollingInterval: 60000,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    });
  public static useCreate = typeApi.useCreateMutation;
  public static useUpdate = typeApi.useUpdateMutation;
  public static useRemove = typeApi.useRemoveMutation;
}

export { TypeHooks };
export const {
  reducerPath: typeReducerPath,
  reducer: typeReducer,
  middleware: typeMiddleware,
} = typeApi;
