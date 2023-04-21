import React, { useRef, useState } from "react";
import Navbar from "./Navbar";

export default function Practice() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const filteredTerm = items.filter((item) => {
    return item.toLowerCase().includes(query);
  });
  const inputFeild = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let value = inputFeild.current.value;
    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });
    inputFeild.current.value = "";
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className=" col-6 my-5 m-auto">
          <input
            type="text"
            placeholder="search..."
            className="form-control"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <form
          action=""
          className="container col-6 m-auto d-flex"
          onSubmit={handleSubmit}
        >
          <input type="text" className="form-control mx-2" ref={inputFeild} />
          <button className="btn btn-success">Add</button>
        </form>
        {filteredTerm.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}

//////////////////////////////=============PRACICE==========//////////////////////////////////////////////////////

// import React, { useRef, useState } from "react";
// import Navbar from "./Navbar";

// export default function Practice() {
//   const [items, setItems] = useState([]);
//   const [query, setQuery] = useState("");

//   const filteredTerm = items.filter((item) => {
//     return item.toLowerCase().includes(query.toLowerCase());
//   });

//   const inputField = useRef();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let value = inputField.current.value;
//     if (value === "") return;
//     setItems((prev) => {
//       return [...prev, value];
//     });
//     inputField.current.value = "";
//   };
//   return (
//     <div>
//       <Navbar />
//       <div className="container ">
//         <div className=" col-6 my-5 m-auto">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="search..."
//             onChange={(e) => setQuery(e.target.value)}
//           />
//         </div>
//         <form
//           action=""
//           className="container col-6 m-auto d-flex"
//           onSubmit={handleSubmit}
//         >
//           <input
//             type="text"
//             placeholder="Add words you want"
//             className="form-control mx-2"
//             ref={inputField}
//           />
//           <button className="btn btn-success">ADD</button>
//         </form>
//         {filteredTerm.map((item, i) => (
//           <div key={i}>{item}</div>
//         ))}
//       </div>
//     </div>
//   );
// }
