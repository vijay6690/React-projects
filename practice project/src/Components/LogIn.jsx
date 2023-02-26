import React, { useState } from "react";
// import { Toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LogIn() {
  const [inp, setInp] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();
  const notify = () => toast("Wow so easy!");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInp({ ...inp, [name]: value });
    // console.log(inp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inp);
    if (Object.keys(inp).length > 0) {
      const res = await fetch(
        `https://justjayapi.000webhostapp.com/login?username=${inp.name}&password=${inp.password}`,
        inp
      );
      const respose = await res.json();
      console.log(respose);

      if (respose.Data[0].id == respose.Code) {
        navigate("/");
        console.log("Logged in successfuly");
      } else {
        alert("user is invalid");
        console.log("invalide user");
      }
    }

    <ToastContainer />;
  };
  return (
    <>
      <div className="container  col-6 ">
        <h1>Log In page</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="name"
              value={inp.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={inp.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
