import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function LogIn() {
  const [inp, setInp] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    sessionStorage.clear("name");
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInp({ ...inp, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inp);
    if (validateLogin()) {
      fetch(`http://localhost:8000/user?name=${inp.name}`)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          if (resp[0] == null) {
            toast.warn("user not found");
          } else {
            if (resp[0].password == inp.password) {
              toast.success("Logged in successfuly");
              sessionStorage.setItem("name", inp.name);
              navigate("/");
            } else {
              toast.warn("you entered wrong password");
            }
          }

          console.log(resp);
        })
        .catch((err) => {
          toast.warn("Login failed due to :");
        });
    }
    // if (Object.keys(inp).length > 0) {
    //     const res =await fetch(`https://justjayapi.000webhostapp.com/login?username=${inp.name}&password=${inp.password}`,{
    //         params:{
    //             name:inp.name,
    //             password:inp.password
    //         }
    //     })
    //     console.log(res.data);
    //     const data = await res.json()
    //     console.log(data);
    //     navigate("/")
    // }
  };

  const validateLogin = () => {
    let result = true;
    if (inp.name === "" || inp.name === null) {
      result = false;
      toast.warning("please enter the username");
    }
    if (inp.password === "" || inp.password === null) {
      result = false;
      toast.warning("please enter the password");
    }
    return result;
  };
  return (
    <>
      <div className="container  col-6 ">
        <span className="span">
          Enter name as "vijay" and password as "vijay123" to log in{" "}
        </span>
        <h1>Log In page</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
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
