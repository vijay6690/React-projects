import React from "react";
import Card from "./Card";
import "../Components/style.css";
import { useState } from "react";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export default function Main() {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  //   const navigate = useNavigate();

  const seachBook = async (event) => {
    event.preventDefault();
    console.log("cliked");
    const data = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDogWjnnKlQrfdmaY3xa1FFB_sE6Cwy8Rg&maxResults=40`
    );
    const parseData = await data.json();
    setBookData(parseData.items);
    console.log(parseData.items);
  };
  useEffect(() => {
    seachBook();
  }, []);

  // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDogWjnnKlQrfdmaY3xa1FFB_sE6Cwy8Rg
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like <br /> a body without soul
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Books</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btnn " onClick={seachBook}>
              Search
            </button>
            <button className="btn btn-primary"> Log in</button>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>
      <div className="container">
        <Card book={bookData} />
      </div>
    </>
  );
}
