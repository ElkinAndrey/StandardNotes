import { noteMiddleware, noteReducer, noteReducerPath } from "@/entities/note";
import { typeMiddleware, typeReducer, typeReducerPath } from "@/entities/type";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  [noteReducerPath]: noteReducer,
  [typeReducerPath]: typeReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(typeMiddleware, noteMiddleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
