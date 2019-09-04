import React from 'react';
import './App.css';
import MovieGrid from './components/MovieGrid/MovieGrid';
import Movies from './components/MovieCard/movies.json';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <section className="moviesSection">
      <SearchBar />
      <MovieGrid items={Movies} />
    </section>
  );
}

export default App;
