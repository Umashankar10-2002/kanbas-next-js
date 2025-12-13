import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = { id: string; title: string };

type TodosState = {
  todos: Todo[];
  todo: Todo;
};

const initialState: TodosState = {
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { id: "-1", title: "Learn Mongo" },
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.todos = state.todos.filter((t) => t.id !== id);
    },
    addTodo: (state) => {
      const timeStamp = new Date().toISOString();
      const newTodo: Todo = { id: timeStamp, title: state.todo.title };
      state.todos = [...state.todos, newTodo];
      state.todo = { id: "", title: "" };
    },
    updateTodo: (state) => {
      state.todos = state.todos.map((t) =>
        t.id === state.todo.id ? state.todo : t
      );
      state.todo = { id: "", title: "" };
    },
    setTodo: (state, action: PayloadAction<Todo>) => {
      state.todo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, setTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
