import React from 'react';
import design from './MovieCard.module.css';

const MovieCard = ({ items }) => {
  return items.map(item => (
    <div className={design.movie_card} key={item.id}>
      <img src={item.posterUrl} alt="" />
      <div className={design.content}>
        <h2 className={design.title}>{item.title}</h2>
        <p className={design.descr}>{item.overview}</p>
      </div>
    </div>
  ));
};

export default MovieCard;
