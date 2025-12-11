import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Courses/courseReducer";
import modulesReducer from "./Courses/[id]/Modules/reducer";
import assignmentsReducer from "./Courses/[id]/Assignments/reducer";

const store = configureStore({
  reducer: {
    coursesReducer,
    modulesReducer,
    assignmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
