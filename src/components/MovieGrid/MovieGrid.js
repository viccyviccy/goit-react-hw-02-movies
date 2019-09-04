import React from 'react';
import PropTypes from 'prop-types';
import design from './Moviegrid.module.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieGrid = ({ items, inputValue }) => {
  const invalidSearch = 'sorry, nothing has been found';
  return (
    <ul className={design.movie_grid}>
      {items.filter(item =>
        item.title.toLowerCase().includes(inputValue.toLowerCase()),
      ).length > 0 ? (
        items
          .filter(item =>
            item.title.toLowerCase().includes(inputValue.toLowerCase()),
          )
          .map(item => (
            <MovieCard
              key={item.id}
              overview={item.overview}
              posterUrl={item.posterUrl}
              title={item.title}
            />
          ))
      ) : (
        <li>{invalidSearch}</li>
      )}
    </ul>
  );
};

MovieCard.propTypes = {
  inputValue: PropTypes.string,
  invalidSearch: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      overview: PropTypes.string,
      posterUrl: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

export default MovieGrid;

/*
{items.map(item => (
        <MovieCard
          key={item.id}
          overview={item.overview}
          posterUrl={item.posterUrl}
          title={item.title}
        />
      ))}
*/
