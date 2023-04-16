import React, { useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../firebase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();

  const navigate = useNavigate();

  const handleSubmite = async (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      return setError("password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      navigate("/login");
      setEmail("");
      setPassword("");
      setConfirmPass("");
    } catch (error) {
      console.log(error);
      return setError("failed to create account");
    }
    setLoading(false);
  };

  return (
    <div className="container col-6">
      <h1 className="my-5">Registation Page</h1>
      <Card>
        {/* <div className="text-center">
          {currentUser && currentUser.email} siggned up
        </div> */}
        {error && <Alert variant="danger">{error}</Alert>}

        {loading && (
          <Alert variant="success">{`User Registered Successfully`}</Alert>
        )}

        <Card.Body>
          <Form onSubmit={handleSubmite}>
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
            <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            Already have account?<Link to="/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
