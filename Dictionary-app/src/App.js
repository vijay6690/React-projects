import { useEffect, useState } from "react";
import "./App.css";

import { Container } from "@mui/material";
import Header from "./Components/Header/Header";
import Definition from "./Components/defination/Definition";
import axios from "axios";

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");

  // const dictionaryApi = async () => {
  //   let response = await fetch(
  //     `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
  //   );
  //   let data = await response.json();
  //   // console.log(data);
  //   setMeanings(data);
  // };
  // console.log(meanings);

  useEffect(() => {
    const dictionaryApi = setTimeout(async () => {
      let response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      // let data = await response.json();
      console.log(response.data);
      setMeanings(response.data);
    }, 200);

    // dictionaryApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "#fff" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {meanings && (
          <Definition word={word} category={category} meanings={meanings} />
        )}
      </Container>
    </div>
  );
}

export default App;
