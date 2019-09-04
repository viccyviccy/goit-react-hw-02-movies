import React from 'react';
import design from './Moviegrid.module.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieGrid = ({ items }) => {
  return (
    <ul className={design.movie_grid}>
      <MovieCard items={items} />
    </ul>
  );
};

export default MovieGrid;
