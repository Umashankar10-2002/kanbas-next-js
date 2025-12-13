// app/Labs/Lab5/WorkingWithArraysAsynchronously.tsx
"use client";

import { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaPencil } from "react-icons/fa6";
import * as client from "./client";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState("");

  const loadTodos = async () => {
    const data = await client.fetchTodos();
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  // GET /lab5/todos/create
  const createTodo = async () => {
    const updated = await client.createTodo();
    setTodos(updated);
  };

  // POST /lab5/todos
  const postTodo = async () => {
    const newTodo = await client.postTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };

  // GET /lab5/todos/:id/delete
  const removeTodo = async (todo: any) => {
    const updated = await client.removeTodo(todo);
    setTodos(updated);
  };

  // DELETE /lab5/todos/:id
  const deleteTodo = async (todo: any) => {
    await client.deleteTodo(todo);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const startEdit = (todo: any) => {
    setEditingId(todo.id);
    setEditingTitle(todo.title);
  };

  // PUT /lab5/todos/:id
  const saveEdit = async (todo: any) => {
    const updatedTodo = { ...todo, title: editingTitle };
    await client.updateTodo(updatedTodo);
    setTodos(todos.map((t) => (t.id === todo.id ? updatedTodo : t)));
    setEditingId(null);
  };

  // Trigger error for ID 1234
  const deleteMissingTodo = async () => {
    setError("");
    try {
      await client.deleteTodo({ id: 1234 });
    } catch (e: any) {
      const msg =
        e?.response?.data?.message ||
        "Unable to Delete Todo with ID: 1234";
      setError(msg);
    }
  };

  return (
    <div id="wd-asynchronous-arrays" className="mt-3">
      <h3>Working with Arrays Asynchronously</h3>

      <h4>
        Todos
        {/* GET create */}
        <FaPlusCircle
          onClick={createTodo}
          className="text-success float-end fs-3 ms-2"
          title="Create Todo (GET /create)"
        />
        {/* POST create */}
        <FaPlusCircle
          onClick={postTodo}
          className="text-primary float-end fs-3 me-3"
          id="wd-post-todo"
          title="Post Todo"
        />
      </h4>

      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input
              type="checkbox"
              className="form-check-input me-2"
              defaultChecked={todo.completed}
              readOnly
            />

            {editingId === todo.id ? (
              <>
                <input
                  className="form-control d-inline w-50 me-2"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                />
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => saveEdit(todo)}
                  id="wd-update-todo"
                >
                  Update Todo
                </button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.title}
                </span>
                <FaPencil
                  className="text-secondary float-end ms-2"
                  onClick={() => startEdit(todo)}
                />
              </>
            )}

            {/* HTTP DELETE */}
            <TiDelete
              className="text-danger float-end me-2 fs-4"
              onClick={() => deleteTodo(todo)}
              id="wd-delete-todo"
            />

            {/* GET delete (older style) – optional but in slides */}
            {/* <FaTrash onClick={() => removeTodo(todo)} /> */}
          </li>
        ))}
      </ul>

      <hr />

      {/* Error test for ID 1234 */}
      <button
        className="btn btn-outline-danger mt-2"
        id="wd-delete-1234"
        onClick={deleteMissingTodo}
      >
        Delete Todo 1234 (Error)
      </button>
      {error && (
        <div id="wd-delete-1234-error" className="text-danger mt-2">
          {error}
        </div>
      )}
    </div>
  );
}
