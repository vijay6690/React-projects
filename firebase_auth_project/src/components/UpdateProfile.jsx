import React, { useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../firebase";

export default function UpdateProfile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordComfirm, setPasswordComfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, updatedPassword, updatedEmail } = useAuth();
  const navigate = useNavigate();

  // console.log(currentUser);
  const handleSubmite = (e) => {
    e.preventDefault();
    if (password !== passwordComfirm) {
      return setError("password do not match");
    }
    const promises = [];
    setLoading(true);
    setError("");
    if (email !== currentUser.email) {
      promises.push(updatedEmail(email));
    }
    if (password) {
      promises.push(updatedPassword(password));
    }
    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError("Failed to update account");
        console.log(error);
      })
      .finally(() => {
        // setLoading(false);
      });
  };

  return (
    <div className="container col-6">
      <h1 className="my-5">Update Profile</h1>
      <Card>
        {error && <Alert variant="danger">{error}</Alert>}

        {loading && (
          <Alert variant="success">{`Profile Updated Successfully`}</Alert>
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
            <Form.Group className="mb-3" controlId="formBasicPasswordComfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={passwordComfirm}
                onChange={(e) => setPasswordComfirm(e.target.value)}
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
