import React from 'react'
import '../MovieCard/MovieCard.css'

export default function MovieCard(props) {
  const { data } = props
  return (
    < >
      <div className="card-item">
        <div className="card-top">
          <img src={data.Poster} alt="" />
        </div>
        <div className="card-bottum">
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </>
  )
}
