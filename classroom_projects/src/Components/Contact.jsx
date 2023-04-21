import React from "react";
import Navbar from "./Navbar";
import { BtnState } from "../Context/Context";
// import { useState } from 'react'
// import { createElement } from 'react'
import { useTheme, useThemeUpdate } from "../Context/Context";

export default function Contact() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "5rem",
    margin: "2rem",
  };
  // const [butt,setButt] = useState([<button>Button</button>])

  // const {
  //   state: { Btn },
  //   dispatch,
  // } = BtnState([<button />]);

  // const addBtn = () =>{
  //    const allbtn = [...butt];
  //    const newbtn = createElement("button")
  //    allbtn.push(newbtn);
  //    setButt(allbtn)
  // }
  // const removeBtn = () =>{
  //   const allbtn = [...butt];
  //    allbtn.pop();
  //    setButt(allbtn)
  // }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <h1>This is contact page</h1>
          <h4> Here we have used the concept of context API </h4>
          <br></br>
          <br></br>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <div style={themeStyles}>Theme</div>

          {/* {Btn.map(c=>c)} */}
          {/* <button onClick={()=>addBtn()}>Add Button</button>
          <button onClick={()=>removeBtn()}>Remove Button</button> */}

          {/* <button onClick={() => dispatch({ type: "ADD_BTN" })}>ADD</button>
          <button onClick={() => dispatch({ type: "REMOVE_BTN" })}>
            REMOVE
          </button> */}
        </div>
      </div>
    </div>
  );
}
