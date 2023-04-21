import React from "react";
import { Button, Form } from "react-bootstrap";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <Form className="d-flex " onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button type="submit" className="mx-3">
        {editId ? "Edit" : "Go"}
      </Button>
    </Form>
  );
};

export default TodoForm;
