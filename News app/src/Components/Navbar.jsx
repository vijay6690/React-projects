import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


export default class Navbar extends Component {
    // constructor() {
    //     super()
    //     this.state={
    //         newsarray: [],
    //         searchNews:""
    //     }

    // }

    // searchNewsFunc = async (title) => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b7a3ee1582de4a4c8e88cd4090df41ac&pagesize=100`
    //     let data = await fetch(url);
    //     let parsdata = await data.json();
    //     console.log(parsdata);
    //     this.setState({
    //         newsarray:parsdata.articles
    //     })

    // }

    changedInput = (e)=>{
        this.setState({
            searchNews:e.target.value
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsApp</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/technology">Technology</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit" >Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}


// movie api = http://www.omdbapi.com/?i=tt3896198&apikey=dbee25b1