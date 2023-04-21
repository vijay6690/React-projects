import React, { useState } from "react";
import Navbar from "./Navbar";
import { Button, Form } from "react-bootstrap";

export default function Pract() {
  const [inp, setInp] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInp({ ...inp, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inp);
  };
  const res = Object.values(inp).map((item, i) => (
    <span key={i}>
      <div>{item.username}</div>
      <div>{item.email}</div>
      <div>{item.password}</div>
    </span>
  ));
  return (
    <div>
      <Navbar />
      <div className="container col-6">
        <h1>Register Page</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="username"
              value={inp.username || ""}
              onChange={handleChange}
              type="text"
              placeholder="Enter username"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              value={inp.email || ""}
              onChange={handleChange}
              type="text"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={inp.password || ""}
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="container">{res}</div>
    </div>
  );
}
