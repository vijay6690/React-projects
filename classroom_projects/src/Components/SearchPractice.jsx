import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import employees from "../data.json";
import Table from "./Table";

export default function SearchPractice() {
  const [query, setQuery] = useState("");

  const filterNames = (data) => {
    return data.employees.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.employment.toLowerCase().includes(query)
    );
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="container col-6 my-5">
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <Table data={filterNames(employees)} />
      </div>
    </div>
  );
}
