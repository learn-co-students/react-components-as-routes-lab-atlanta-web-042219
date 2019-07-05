import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return(
          <div>
            <h3>{movie.title}</h3>
            <p>Runtime: {movie.time}</p>
            <p>Metascore: {movie.metascore}</p>
            <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul>
          </div>
        )
      })}
    </div>
  )
}

export default Movies;
