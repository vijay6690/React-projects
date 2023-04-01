import React from 'react'
import { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux'
import { addMovies } from '../features/Movies/movieSlice'
import { addshows } from '../features/Movies/movieSlice'


export default function Home() {
  const movieSearch = "Harry"
  const showSearch = "Friends"
  const despatch = useDispatch(addMovies)
  const despatchshow = useDispatch(addshows)

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=dbee25b1&s=${movieSearch}&type=movie`)
      const parsData = await response.json()
      console.log(parsData.Search);
      despatch(addMovies(parsData))
    }

    const fetchShows = async () => {
      const respons = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=dbee25b1&s=${showSearch}&type=series`)
      const parsDat = await respons.json()
      console.log(parsDat.Search);
      despatchshow(addshows(parsDat))
    }

    fetchMovies();
    fetchShows();
  }, [despatch])

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  )
}
