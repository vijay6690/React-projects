import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../features/Movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard';
import '../MovieListing/MovieListing.css'



export default function MovieListing() {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    let renderMovies = "";
    let renderShows = "";

    renderMovies =
      movies.Response === "True" ? (
         movies.Search.map((movie,index)=><MovieCard key={index} data={movie} />)
    ):(
        <div className='error'><h3>{movies.Error}</h3> </div>
    )

    renderShows =
      shows.Response === "True" ? (
         shows.Search.map((show,index)=><MovieCard key={index} data={show} />)
    ):(
        <div className='error'><h3>{shows.Error}</h3> </div>
    )


  return (
        <>
            <div className="movie-wrapper">
                <div className="movie-list">
                    <h2>Movies</h2>
                    <div className="movie-container">
                    {renderMovies}
                    </div>
                </div>
            </div>
            <div className="movie-wrapper">
                <div className="movie-list">
                    <h2>Shows</h2>
                    <div className="movie-container">
                    {renderShows}
                    </div>
                </div>
            </div>
           
        </>
    )
}
