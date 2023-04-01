import { logDOM } from "@testing-library/react";
import React from "react";
import "./Definition.css";

export default function Definition({ meanings, word, category }) {
  console.log(meanings[0]);
  return (
    <div className="meanings">
      {meanings[0] && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          controls
        >
          Your browser does not support this audio
        </audio>
      )}
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        word &&
        Object.entries(meanings).map((mean) =>
          // console.log(mean) &&
          mean[1].meanings.map((def) =>
            def.definitions.map((item, index) => (
              <div
                key={index}
                className="singleMean"
                style={{ backgroundColor: "white", color: "black" }}
              >
                <b>{item.definition}</b>
                <hr style={{ width: "100%", background: "black" }} />
                {item.example && (
                  <span>
                    <b>Example :</b>
                    {item.example}
                  </span>
                )}
                {item.synonyms && (
                  <span>
                    <b>Synonym :</b>
                    {item.synonyms.map((s) => `${s},`)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
}
// def.definitions
// (
//     meanings &&
//     Object.entries(meanings).map((mean) =>
//       mean[1].meanings.map((def) =>
//         def.definitions.map((item, index) => (
//           <div
//             key={index}
//             className="singleMean"
//             style={{ backgroundColor: "white", color: "black" }}
//           >
//             <b>{item.definition}</b>
//             <hr style={{ width: "100%", background: "black" }} />
//             {item.example && (
//               <span>
//                 <b>Example :</b>
//                 {item.example}
//               </span>
//             )}
//             {item.synonyms && (
//               <span>
//                 <b>Synonym :</b>
//                 {item.synonyms.map((s) => `${s},`)}
//               </span>
//             )}
//           </div>
//         ))
//       )
//     )
//   )

// (
//     meanings &&
//     Object.entries(meanings).map((item) =>
//       item[1].meanings.map((mean) =>
//         mean.definitions.map((def) => (
//           <div className="singleMean">{def.definition}</div>
//         ))
//       )
//     )
//   )
