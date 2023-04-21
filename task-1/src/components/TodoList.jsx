import React from "react";
import { Button } from "react-bootstrap";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul>
      {todos.map((t, i) => (
        <li className=" my-3" key={i}>
          <span key={t.id}>{t.todo}</span>
          <Button className="mx-2" onClick={() => handleEdit(t.id)}>
            Edit
          </Button>
          <Button className="mx-1 " onClick={() => handleDelete(t.id)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
