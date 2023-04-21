import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Card, Dropdown, Table } from "react-bootstrap";
import axios from "axios";
// import users from "../users.json";

export default function DropDownSearcj() {
  const [datas, setDatas] = useState([]);
  const [query, setQuery] = useState("");
  const [bData, setBdata] = useState("");

  const getData = async () => {
    const response = await axios.get("https://dummyjson.com/users");
    setDatas(response.data.users);
  };
  useEffect(() => {
    getData();
  }, []);

  const hadleChange = (e) => {
    setQuery(e.target.value);
  };

  const updated = datas.map((item) => item.bloodGroup);
  const latest = [...new Set(updated)];

  const hanldeOptionClick = (item) => {
    console.log("clicked ", item);
    return datas.filter((itm) => console.log(itm));
  };

  return (
    <div>
      <Navbar />
      <div className="container col-6">
        <Card>
          <Card.Body className="d-flex">
            <input
              type="text"
              placeholder="search..."
              className="form-control"
              onChange={(e) => setQuery(e.target.value)}
            />
            <Dropdown className="mx-3">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Blood Group
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <select
                  // value={bData}
                  onChange={(e) => setBdata(e.target.value)}
                >
                  {latest.map((item, i) => (
                    <option
                      value="value"
                      key={i}
                      onClick={() => hanldeOptionClick(item)}
                    >
                      {item}
                    </option>
                    // <option
                    //   value={bData}
                    //   key={i}
                    //   onClick={() => hanldeOptionClick(item)}
                    // >
                    //   {item}
                    // </option>
                  ))}
                </select>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </div>

      <div className="container col-6">
        <Card>
          <Card.Body>
            <Table>
              <thead>
                <th>Name</th>
                <th>BloodGroup</th>
              </thead>
              <tbody>
                {datas &&
                  datas
                    .filter((item) => {
                      return item.username.includes(query);
                      // item.bloodGroup.toLowerCase().includes(bData)
                    })
                    .map((item, i) => (
                      <tr key={i}>
                        <td>{item.username}</td>
                        <td>{item.bloodGroup}</td>
                      </tr>
                    ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
