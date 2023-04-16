import React, { useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { forgotPassword } = useAuth();

  const handleResetSubmite = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await forgotPassword(email);
      setMessage("Check Your Inbox Further Instruction");
    } catch (error) {
      console.log(error);
      return setError("Failed to Reset Password");
    }
  };
  return (
    <>
      <div className="container col-6">
        <h1 className="my-5">Reset Password </h1>
        <Card>
          {loading && <Alert>{`Logged in successfuly`}</Alert>}
          {error && <Alert>{error}</Alert>}
          {message && <Alert>{message}</Alert>}
          <Card.Body>
            <Form onSubmit={handleResetSubmite}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Reset Password
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-3">
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </>
  );
}
