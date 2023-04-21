import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar from './Navbar'

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchText,setSearchText] = useState('');

    let url = "http://www.omdbapi.com/?i=tt3896198&apikey=dbee25b1"
    const getdata = async (title) => {
        let response = await fetch(`${url}&s=${title}`)
        let data = await response.json()
        console.log(data.Search);
        setMovies(data.Search)
    }

    useEffect(() => {
        getdata('superman');

    }, [])





    return (
        <>
            <Navbar />
            <div className="container">
                <div className='col-4 my-3'>
                    {/* <form className="d-flex" role="search"> */}
                    <div className='d-flex align-center'>
                        <input className="form-control my-2 " type="search" placeholder="search the movie you want" aria-label="Search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                        <button className="btn btn-outline-success mx-3" style={{width:"70px",height:"45px"}} type="submit" onClick={()=>getdata(searchText)}>Search</button>
                        </div>
                    {/* </form> */}
                </div>
                <div className="row  mx-1">
                    {
                        movies?.length > 0 
                        ? (
                            <div className="row ">
                            {movies.map((element) => {
                                return <div className='col-4 my-2' key={element.imdbID}><div className="card text-bg-dark" >
                                    <img src={element.Poster} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">{element.Title}</h5>
                                        <p className="card-text">{element.Type}</p>
                                        <p className="card-text"><small>{element.Year}</small></p>
                                    </div>
                                </div>
                                </div>
                            })}
                            </div>
                        ):(
                            <div className="empty">
                                <h2>No such Movies found</h2>
                            </div>
                        ) 
                    }


                    
                </div>
            </div>
        </>
    )
}
