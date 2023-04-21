import React from "react";

export default function Table({ data }) {
  return (
    <div>
      <div className="container">
        <table className="table text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Employment</th>
            </tr>
          </thead>
          {data.map((item) => {
            // console.log(employees.employees[0]);
            return (
              <tbody key={item.id}>
                <tr>
                  <th>{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.employment}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
