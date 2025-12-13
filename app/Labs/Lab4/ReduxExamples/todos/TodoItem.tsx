"use client";

import { ListGroupItem, Button } from "react-bootstrap";
import type { Todo } from "./todosReducer";

type Props = {
  todo: Todo;
  deleteTodo: (id: string) => void;
  setTodo: (todo: Todo) => void;
};

export default function TodoItem({ todo, deleteTodo, setTodo }: Props) {
  return (
    <ListGroupItem>
      <Button
        variant="danger"
        onClick={() => deleteTodo(todo.id)}
        className="float-end"
      >
        Delete
      </Button>
      <Button
        variant="warning"
        onClick={() => setTodo(todo)}
        className="float-end me-2"
      >
        Edit
      </Button>
      <span className="fs-2">{todo.title}</span>
    </ListGroupItem>
  );
}
