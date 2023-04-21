import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // const menuObject = {
  //   "/": "/",
  //   "/about": "/About",
  //   "/contact": "/Contact",
  //   "/example": "/Example"
  // }

  return (
    //     <>
    <>
      {/* <div className=" navbar navbar-expand-lg">
      <div className="container-fluid">
      <ul className='d-flex justify-content-start mx-3'>
        <li className='nav-item mx-3'>
          <Link  className='navbar-brand nav-link ' to={menuObject['/']}>Home</Link>
        </li>
        <li className='nav-item mx-2'>
          <Link className='navbar-brand nav-link' to={menuObject['/about']}>About</Link>
        </li>
        <li className='nav-item mx-2'>
          <Link className='navbar-brand nav-link' to={menuObject['/contact']}>Contact</Link>
        </li>
        <li className='nav-item mx-2'>
          <Link className='navbar-brand nav-link' to={menuObject['/example']}>Example</Link>
        </li>
      </ul>
      </div>
      </div>
    </> */}

      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/home">Home</a> */}
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/about">About</a> */}
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/contact">Contact</a> */}
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/contact">Contact</a> */}
                <Link className="nav-link" to="/example">
                  Example
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/contact">Contact</a> */}
                <Link className="nav-link" to="/searchpractice">
                  Search Practice
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/contact">Contact</a> */}
                <Link className="nav-link" to="/dropdownsearch">
                  Dropdown Search
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/contact">Contact</a> */}
                <Link className="nav-link" to="/practice">
                  Practice
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies">
                  Movies
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/pract">
                  Pract
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/notelist">
                  NoteList
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <Outlet/> */}
      </nav>
    </>
  );
}
