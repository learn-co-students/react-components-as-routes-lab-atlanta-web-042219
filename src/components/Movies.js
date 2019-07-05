import React from 'react';
import { movies } from '../data';

const moviesCon = movies =>
  movies.map(movie => {
    return (
      <div>
        Title: {movie.title} <br></br>
        Run Time: {movie.time} <br></br>
        Genres: <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul>
      </div>
    )
  })


const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesCon(movies)}
    </div>
  );
};

export default Movies;
