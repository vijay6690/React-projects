import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Form, Table } from "react-bootstrap";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchBlood, setSearchBlood] = useState("");
  const [id, setId] = useState("");
  const getAllData = async () => {
    const { data } = await axios.get(`https://dummyjson.com/users/${id}`);
    setUsers(data?.users);
  };
  useEffect(() => {
    getAllData();
  }, []);

  const bloodGroups = users.map((user) => user.bloodGroup);
  const uniqueBloodGroups = new Set(bloodGroups);
  const final = [...uniqueBloodGroups];

  const handleChange = (e) => {
    console.log("e.target.value===", e.target.value);
    setSearch(e.target.value);
  };

  const handleBloodChange = (e) => {
    console.log("bloddddd", e.target.value);
    if (e.target.value == "Blood groups") {
      setSearchBlood("");
    } else {
      setSearchBlood(e.target.value);
    }
  };
  return (
    <div className="container">
      <header>Users Data</header>
      <Form className="row">
        <Form.Group controlId="formGridEmail" className="col-6">
          <Form.Control
            type="text"
            placeholder="Search here"
            value={search}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="formGridPassword" className="col-2">
          <Form.Select
            aria-label="Default select example"
            value={searchBlood}
            onChange={(e) => handleBloodChange(e)}
          >
            <option value={"Blood groups"}>Blood groups</option>
            {final.map((unique) => (
              <option value={unique} key={unique}>
                {unique}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Table className="" striped bordered hover size="bg">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Bloodgroup</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter(
                (user) =>
                  (user.username.toLowerCase().includes(search.toLowerCase()) &&
                    searchBlood === "") ||
                  searchBlood === "Blood groups" ||
                  user.bloodGroup === searchBlood
              )
              .map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.bloodGroup}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Form>
    </div>
  );
}

export default UsersList;
