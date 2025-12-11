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

    editModule: (state, action: PayloadAction<string>) => {
      const moduleId = action.payload;
      state.modules = state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m
      );
    },

    updateModule: (state, action: PayloadAction<Module>) => {
      const updated = action.payload;
      state.modules = state.modules.map((m) =>
        m._id === updated._id ? { ...updated, editing: false } : m
      );
    },
  },
});

export const { addModule, deleteModule, editModule, updateModule } =
  modulesSlice.actions;

export default modulesSlice.reducer;
