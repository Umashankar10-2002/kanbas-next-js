"use client";

import { ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import type { Todo } from "./todosReducer";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoList() {
  const { todos } = useSelector(
    (state: any) => state.todosReducer
  ) as { todos: Todo[] };
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todo List</h2>
      <TodoForm />
      <ListGroup>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={(id) => dispatch(deleteTodo(id))}
            setTodo={(todo) => dispatch(setTodo(todo))}
          />
        ))}
      </ListGroup>
    </div>
  );
}
