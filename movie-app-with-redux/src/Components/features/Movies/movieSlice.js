import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:{},
    shows:{}
}

 const movieSlice = createSlice({
    name :"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies = payload;
        }
    }
})
 const showSlice = createSlice({
    name :"shows",
    initialState,
    reducers:{
        addshows:(state,{payload})=>{
            state.shows = payload;
        }
    }
})

export const {addMovies} = movieSlice.actions;
export const {addshows}  = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export default movieSlice.reducer;