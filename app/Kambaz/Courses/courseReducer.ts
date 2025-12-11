// app/Kambaz/Courses/courseReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { courses as initialCourses, Course } from "../data/courses";

type CoursesState = {
  courses: Course[];
};

const initialState: CoursesState = {
  courses: initialCourses,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    // CREATE
    addNewCourse: (
      state,
      action: PayloadAction<Omit<Course, "id">>
    ) => {
      const payload = action.payload;

      const newCourse: Course = {
        id: payload.code?.trim() || `course-${Date.now()}`,
        title: payload.title,
        code: payload.code,
        term: payload.term,
        color: payload.color,
        image: payload.image,
      };

      state.courses.push(newCourse);
    },

    // DELETE
    deleteCourse: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.courses = state.courses.filter((c) => c.id !== id);
    },

    // UPDATE
    updateCourse: (state, action: PayloadAction<Course>) => {
      const updated = action.payload;
      state.courses = state.courses.map((c) =>
        c.id === updated.id ? updated : c
      );
    },
  },
});

export const { addNewCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;

export default coursesSlice.reducer;
