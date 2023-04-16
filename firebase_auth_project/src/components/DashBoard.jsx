import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function DashBoard() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState(false);
  console.log(currentUser);
  const navigate = useNavigate();

  const hanldeLogOut = async () => {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      setError("Failed to LogOut");
      console.log(error);
    }
  };
  return (
    <div className="container col-6 my-5">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email :</strong>
          {currentUser && currentUser.email}
          <div className="text-center">
            <Link to="/update-profile" className="btn btn-primary w-50 mt-3 ">
              Update Profile
            </Link>
          </div>
        </Card.Body>
        <div className="w-100 text-center mt-3">
          <Button variant="link" onClick={hanldeLogOut}>
            Log Out
          </Button>
        </div>
      </Card>
    </div>
  );
}
