import React, { useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmite = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      return setError("Failed to log in");
    }
  };
  return (
    <>
      <div className="container col-6">
        <h1 className="my-5">Log in </h1>
        <Card>
          {loading && <Alert>{`Logged in successfuly`}</Alert>}
          {error && <Alert>{error}</Alert>}
          <Card.Body>
            <Form onSubmit={handleLoginSubmite}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Log in
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-3">
          Dont have account?<Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
}
