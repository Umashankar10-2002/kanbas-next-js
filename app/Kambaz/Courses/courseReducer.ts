// app/Kambaz/Courses/courseReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Course } from "../data/courses";

type CoursesState = {
  courses: Course[];
};

const initialState: CoursesState = {
  courses: [], // will be filled from server
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    // replace whole list with server data
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
    },

    // add course returned from server (has id)
    addNewCourse: (state, action: PayloadAction<Course>) => {
      state.courses.push(action.payload);
    },

    deleteCourse: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.courses = state.courses.filter((c) => c.id !== id);
    },

    updateCourse: (state, action: PayloadAction<Course>) => {
      const updated = action.payload;
      state.courses = state.courses.map((c) =>
        c.id === updated.id ? updated : c
      );
    },
  },
});

export const { setCourses, addNewCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;

export default coursesSlice.reducer;
