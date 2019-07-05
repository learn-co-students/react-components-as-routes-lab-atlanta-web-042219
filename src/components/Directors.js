import React from 'react';
import { directors } from '../data';

const directorCon = () =>
  directors.map(director =>
    <div>
      {director.name}
      <ul>
        {moviesCon(director)}
      </ul>
    </div>
  )

const moviesCon = (director) =>
  director.movies.map(movie =>
    <li>{movie}</li>
  )

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorCon()}
    </div>
  );
}

export default Directors
