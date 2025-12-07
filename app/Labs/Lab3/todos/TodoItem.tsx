import React from "react";

type Todo = {
  title: string;
  status: string;
  done: boolean;
};

type Props = {
  todo?: Todo;
};

const TodoItem = ({
  todo = { done: true, title: "Buy milk", status: "COMPLETED" },
}: Props) => {
  return (
    <li className="list-group-item">
      <input
        type="checkbox"
        className="me-2"
        defaultChecked={todo.done}
      />
      {todo.title} ({todo.status})
    </li>
  );
};

export default TodoItem;
