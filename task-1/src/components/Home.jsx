import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const firstname = localStorage.getItem("fname");
  const lastname = localStorage.getItem("lname");
  const [data, setData] = useState([firstname, lastname]);
  const navigate = useNavigate();
  const handleRemove = () => {
    localStorage.clear();
    setData("");
    navigate("/");
  };
  return (
    <div className="container col-6 my-5">
      <Card>
        <Card.Body>
          <h1 className="text-center">
            Welcome : {firstname} {lastname}
          </h1>
          <Button onClick={handleRemove}>Remove Data</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
