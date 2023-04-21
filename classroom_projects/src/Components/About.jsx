import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import Posts from "./Posts";

export default function About() {
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const fethPost = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const resp = await res.json();
    setPost(resp);
    console.log(resp);
  };

  useEffect(() => {
    fethPost();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (num) => {
    setCurrentPage(num);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {/* <h1>i am about page</h1>
          <h1>Which Game do want to play ?</h1>
          <ul>
            {options.map((item) => {
              return (
                <>
                  <li>
                    <label htmlFor="gam">{item}</label>
                    <input
                      type="radio"
                      id={item}
                      name={"gam"}
                      value={item}
                      onChange={(e) => setGame(e.target.value)}
                    />
                  </li>
                </>
              );
            })}
          </ul>

          <h2>When will you play</h2>
          <ul>
            {days.map((item1) => {
              return (
                <>
                  <li>
                    <label htmlFor="time">{item1}</label>
                    <input
                      type="radio"
                      id={item1}
                      name="time"
                      value={item1}
                      onChange={(e) => setDay(e.target.value)}
                    />
                  </li>
                </>
              );
            })}
          </ul>
          <h1>
            you have choosen the game of {game} on {day}
          </h1> */}
          {/* {
            <ul>{
              options.map((item,index)=>{
                return <li>
                  <label htmlFor={item.id}>{item}</label>
                  <input type="radio" id={item.id} name={"game"}/>
                </li>
              })
              }
            </ul>
          }
          <h1>you will play</h1>
          {
            <ul>
              {days.map((item)=>{
                return <li>
                  <label htmlFor={item} >{item}</label>
                  <input type="radio" name='week'/>
                </li>
              })}
            </ul>
          } */}
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <Posts post={currentPost} />
          <Pagination
            totalPosts={post.length}
            postPerPage={postPerPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}
