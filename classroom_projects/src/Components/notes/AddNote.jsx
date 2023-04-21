import React from "react";

export default function AddNote({ list, handleDelete }) {
  console.log(list);
  return (
    <div className="data">
      {list.map((data, i) => {
        console.log(data);
        return (
          <tr key={i}>
            <td>{data.uname}</td>
            <td>{data.email}</td>
            <td>{data.pass}</td>
            <button onClick={() => handleDelete(i)}>X</button>
          </tr>
        );
      })}
    </div>
  );
}
