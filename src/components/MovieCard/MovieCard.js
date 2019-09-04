import React from 'react';
import PropTypes from 'prop-types';
import design from './MovieCard.module.css';

const MovieCard = ({ id, posterUrl, title, overview }) => {
  // const { id, title, overview, posterUrl } = items;
  return (
    <li className={design.movie_card} key={id}>
      <img src={posterUrl} alt="" />
      <div className={design.content}>
        <h2 className={design.title}>{title}</h2>
        <p className={design.descr}>{overview}</p>
      </div>
    </li>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number,
  posterUrl: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
};

export default MovieCard;
