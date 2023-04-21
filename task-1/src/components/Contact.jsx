import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Contact() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validate = () => {
    let isProceed = true;

    const username = localStorage.getItem("fname");
    const localemail = localStorage.getItem("email");
    console.log(username);
    let errorMessage = "Please Enter the value : ";

    if (user.fname === "" || user.fname === null) {
      isProceed = false;
      errorMessage += " Firstname ,";
    }
    if (user.lname === "" || user.lname === null) {
      isProceed = false;
      errorMessage += " Lastname ,";
    }

    if (user.email === "") {
      isProceed = false;
      errorMessage += " email ,";
    }
    if (user.phone === "") {
      isProceed = false;
      errorMessage += " phone ";
    }
    if (username == user.fname) {
      isProceed = false;
      errorMessage = "User Already Exist";
    }
    if (localemail == user.email) {
      isProceed = false;
      errorMessage = "User Already Exist";
    }

    if (!isProceed) {
      setError(errorMessage);
    } else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(user.email)) {
    } else {
      isProceed = false;
      setError("Please Enter the valid Email formate");
    }
    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setValid(true);
      setError("");
      localStorage.setItem("fname", user.fname);
      localStorage.setItem("lname", user.lname);
      localStorage.setItem("email", user.email);
      localStorage.setItem("phone", user.phone);
      toast.success("User Registered successfully");
      navigate("/home");
    } else {
      console.log("not registered");
    }
  };

  return (
    <div className="container col-6">
      <Card className="my-3">
        <h1 className="text-center">Contact Page</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                value={user.fname}
                name="fname"
                onChange={handleChange}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                value={user.lname}
                name="lname"
                onChange={handleChange}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={user.email}
                name="email"
                onChange={handleChange}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                value={user.phone}
                name="phone"
                onChange={handleChange}
                type="number"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
