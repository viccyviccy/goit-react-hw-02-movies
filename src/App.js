import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import MovieGrid from './components/MovieGrid/MovieGrid';
import Movies from './components/MovieCard/movies.json';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  state = {
    inputValue: '',
  };

  searchInput = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <section className="moviesSection">
        <SearchBar value={inputValue} onChange={this.searchInput} />
        <MovieGrid inputValue={inputValue} items={Movies} />
      </section>
    );
  }
}

App.propTypes = {
  inputValue: PropTypes.string,
};

export default App;
