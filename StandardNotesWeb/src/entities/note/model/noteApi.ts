import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Note } from "@/shared/entities";

const noteApi = createApi({
  reducerPath: "notes",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7079/api" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    get: builder.query<Note[], void>({
      query: () => ({ url: `/notes` }),
      providesTags: () => ["Post"],
    }),
    getById: builder.query<Note, string>({
      query: (id) => ({ url: `/notes/${id}` }),
    }),
    create: builder.mutation<Note, Note>({
      query: (value) => ({ url: `/notes`, method: "POST", body: value }),
      invalidatesTags: ["Post"],
    }),
    update: builder.mutation<Note, Note>({
      query: (value) => ({ url: `/notes/${value.id}`, method: "PUT", body: value }),
      invalidatesTags: ["Post"],
    }),
    remove: builder.mutation<Note, string>({
      query: (id) => ({ url: `/notes/${id}`, method: "DELETE" }),
      invalidatesTags: ["Post"],
    }),
  }),
});

class NoteHooks {
  public static useGet = noteApi.useGetQuery;
  public static useGetById = noteApi.useGetByIdQuery;
  public static useCreate = noteApi.useCreateMutation;
  public static useUpdate = noteApi.useUpdateMutation;
  public static useRemove = noteApi.useRemoveMutation;
}

export { NoteHooks };
export const {
  reducerPath: noteReducerPath,
  reducer: noteReducer,
  middleware: noteMiddleware,
} = noteApi;
