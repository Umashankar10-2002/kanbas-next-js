"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Assignment = {
  _id: string;
  title: string;
  course: string;   // must match Course.id
  completed?: boolean;
  editing?: boolean;
};

type AssignmentsState = {
  assignments: Assignment[];
};

// 👇 Seed some initial assignments here
const initialState: AssignmentsState = {
  assignments: [
    {
      _id: "a1",
      title: "Syllabus Quiz",
      course: "CS5610",        // change to match one of your real course IDs
      completed: false,
      editing: false,
    },
    {
      _id: "a2",
      title: "HW 1 – Intro to React",
      course: "CS5610",
      completed: false,
      editing: false,
    },
    {
      _id: "a3",
      title: "Project Proposal",
      course: "CS5010",        // another course
      completed: false,
      editing: false,
    },
  ],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (
      state,
      action: PayloadAction<{ title: string; course: string }>
    ) => {
      const { title, course } = action.payload;
      const newAssignment: Assignment = {
        _id: `ass-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title,
        course,
        completed: false,
        editing: false,
      };
      state.assignments.push(newAssignment);
    },

    deleteAssignment: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.assignments = state.assignments.filter((a) => a._id !== id);
    },

    editAssignment: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.assignments = state.assignments.map((a) =>
        a._id === id ? { ...a, editing: true } : { ...a, editing: false }
      );
    },

    updateAssignment: (state, action: PayloadAction<Assignment>) => {
      const updated = action.payload;
      state.assignments = state.assignments.map((a) =>
        a._id === updated._id ? { ...updated, editing: false } : a
      );
    },

    toggleCompleted: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.assignments = state.assignments.map((a) =>
        a._id === id ? { ...a, completed: !a.completed } : a
      );
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  editAssignment,
  updateAssignment,
  toggleCompleted,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
