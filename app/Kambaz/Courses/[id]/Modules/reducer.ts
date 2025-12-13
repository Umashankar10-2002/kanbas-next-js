// app/Kambaz/Courses/[id]/Modules/reducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Module = {
  _id: string;
  name: string;
  course: string; // course id (same as Course.id)
  editing?: boolean;
};

type ModulesState = {
  modules: Module[];
};

const initialState: ModulesState = {
  modules: [],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    // Replace the whole list (used when loading from server, or after create/delete/update)
    setModules: (state, action: PayloadAction<Module[]>) => {
      state.modules = action.payload;
    },

    // Local-only add (we’re mostly using server create now, but it’s fine to keep)
    addModule: (
      state,
      action: PayloadAction<{ name: string; course: string }>
    ) => {
      const { name, course } = action.payload;
      const newModule: Module = {
        _id: `module-${Date.now()}-${Math.random()
          .toString(16)
          .slice(2)}`,
        name,
        course,
        editing: false,
      };
      state.modules.push(newModule);
    },

    deleteModule: (state, action: PayloadAction<string>) => {
      const moduleId = action.payload;
      state.modules = state.modules.filter(
        (m) => m._id !== moduleId
      );
    },

    // Mark a single module as editing
    editModule: (state, action: PayloadAction<string>) => {
      const moduleId = action.payload;
      state.modules = state.modules.map((m) =>
        m._id === moduleId
          ? { ...m, editing: true }
          : { ...m, editing: false }
      );
    },

    // Update one module (used if you want a local reducer update)
    updateModule: (state, action: PayloadAction<Module>) => {
      const updated = action.payload;
      state.modules = state.modules.map((m) =>
        m._id === updated._id ? { ...updated, editing: false } : m
      );
    },
  },
});

// 👈 now setModules is exported as well
export const {
  setModules,
  addModule,
  deleteModule,
  editModule,
  updateModule,
} = modulesSlice.actions;

export default modulesSlice.reducer;
