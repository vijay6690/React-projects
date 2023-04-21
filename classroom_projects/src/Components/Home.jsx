import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Home() {
  const [color, setColor] = useState("green");
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <h1>This is home page</h1>
          <br />
          <br />
          <br />
          select color
          <select name="" id="" onChange={handleChange}>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </select>
          <br />
          <div
            style={{
              width: "500px",
              height: "500px",
              border: "1px solid black",
              margin: 30,
              background: color,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
