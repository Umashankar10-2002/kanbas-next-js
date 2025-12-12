"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Assignment = {
  _id: string;
  title: string;
  course: string; // must match Course.id
  completed?: boolean;
  editing?: boolean;
};

type AssignmentsState = {
  assignments: Assignment[];
};

const initialState: AssignmentsState = {
  assignments: [], // ✅ server will provide real data
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // ✅ Replace the whole list after loading from server or after CRUD
    setAssignments: (state, action: PayloadAction<Assignment[]>) => {
      state.assignments = action.payload;
    },

    // ✅ Only UI behavior: mark ONE assignment as editing
    editAssignment: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.assignments = state.assignments.map((a) =>
        a._id === id ? { ...a, editing: true } : { ...a, editing: false }
      );
    },

    // ✅ Optional: update local fields while typing (before saving to server)
    updateLocalAssignment: (state, action: PayloadAction<Assignment>) => {
      const updated = action.payload;
      state.assignments = state.assignments.map((a) =>
        a._id === updated._id ? updated : a
      );
    },
  },
});

export const { setAssignments, editAssignment, updateLocalAssignment } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;
