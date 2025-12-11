"use client";

import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import type { Todo } from "./todosReducer";
import { setTodo, addTodo, updateTodo } from "./todosReducer";

export default function TodoForm() {
  const todo = useSelector(
    (state: any) => state.todosReducer.todo
  ) as Todo;
  const dispatch = useDispatch();

  return (
    <>
      <Button
        variant="primary"
        className="mb-2 w-25 float-end"
        onClick={() => dispatch(addTodo())}
      >
        Add
      </Button>
      <Button
        variant="success"
        className="mb-2 w-25 float-end"
        onClick={() => dispatch(updateTodo())}
      >
        Update
      </Button>
      <input
        value={todo.title}
        className="form-control mb-2 w-50"
        onChange={(e) =>
          dispatch(setTodo({ ...todo, title: e.target.value }))
        }
      />
    </>
  );
}
