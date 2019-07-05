import React from 'react';
import { actors } from '../data';

const actorsCont = () =>
  actors.map(actor =>
    <div className='actor'>
      {actor.name}
      {moviesCont(actor)}
    </div>
  )

const moviesCont = (actor) =>
  <ul>{actor.movies.map(movie => <li>{movie}</li>)}</ul>


const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsCont()}
    </div>
  );
};

export default Actors;
