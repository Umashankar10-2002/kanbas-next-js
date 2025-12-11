// app/Labs/Lab5/client.ts
import axios from "axios";

const REMOTE_SERVER = "http://localhost:4000";

// ---------- Welcome ----------
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
  return response.data;
};

// ---------- Assignment (objects) ----------
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;

export const fetchAssignment = async () => {
  const response = await axios.get(ASSIGNMENT_API);
  return response.data;
};

export const updateTitle = async (title: string) => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};

// ---------- Todos (arrays) ----------
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;

export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};

export const createTodo = async () => {
  const response = await axios.get(`${TODOS_API}/create`);
  return response.data; // returns full todos array
};

export const postTodo = async (todo: any) => {
  const response = await axios.post(TODOS_API, todo);
  return response.data; // returns new todo
};

export const removeTodo = async (todo: any) => {
  const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
  return response.data; // returns full todos array
};

export const deleteTodo = async (todo: any) => {
  const response = await axios.delete(`${TODOS_API}/${todo.id}`);
  return response.data; // likely empty, that's ok
};

export const updateTodo = async (todo: any) => {
  const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
  return response.data; // empty, we ignore in UI
};
