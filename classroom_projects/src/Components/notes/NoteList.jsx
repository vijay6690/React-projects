import React, { useState } from "react";
// import Navbar from "./Navbar";
import { Button, Form } from "react-bootstrap";
import Navbar from "../Navbar";
import AddNote from "./AddNote";

export default function NoteList() {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // const [inp, setInp] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });
  const [list, setList] = useState([]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInp({ ...inp, [name]: value });
  // };

  const handleAddNote = (e) => {
    e.preventDefault();
    // const { name, value } = e.target;
    // setInp({ ...inp, [name]: value });
    const newNote = {
      uname,
      email,
      pass,
    };
    // console.log(newNote);
    setList([...list, newNote]);
    // setList(newNotes);
    // console.log(inp);
  };

  const handleDelete = (id) => {
    console.log(id);
    const filtered = list.filter((elem, i) => i != id);
    setList(filtered);
  };

  return (
    <div>
      <Navbar />
      <div className="container col-6">
        <h1>Register Page</h1>
        <Form onSubmit={handleAddNote}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="username"
              // value={inp.username || ""}
              value={uname}
              // onChange={handleChange}
              onChange={(e) => setUname(e.target.value)}
              type="text"
              placeholder="Enter username"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              // value={inp.email || ""}
              value={email}
              // onChange={handleChange}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              // value={inp.password || ""}
              value={pass}
              // onChange={handleChange}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </div>
      <div className="container">
        {list.length > 0 && (
          <table border="1px solid ">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              <AddNote list={list} handleDelete={handleDelete} />
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
