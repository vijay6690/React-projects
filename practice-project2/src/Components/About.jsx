import React, { useState } from 'react'

export default function About() {
  // const obj = {
  //   id: 1, username: "vijay",
  //   id: 2, username: "sanjay",
  //   id: 3, username: "jay",
  //   id: 4, username: "ajay",
  //   id: 5, username: "ketan",
  // }
  const obj = [
    { id: 1, username: "vijay" },
    { id: 2, username: "sanjay" },
    { id: 3, username: "bony" },
    { id: 4, username: "rahul" },
    { id: 5, username: "rahul" },
    { id: 6, username: "rahul" },
  ]
  const [ data, setData] = useState(obj)
  const handleRemove = (idx) => {
    const res = data.filter((item, id) => {
      return id != idx
    })
    setData(res)
  }
  return (
    <>
      <h2>About Page</h2>
      <ol>
        {data.map((item, id) => {
          return <li key={id}>{item.username} <button onClick={() => handleRemove(id)}>Remove</button></li>
        })}
      </ol>
    </>
  )
}
