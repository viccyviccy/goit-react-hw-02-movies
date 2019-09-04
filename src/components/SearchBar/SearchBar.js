import React from 'react';
import design from './SearchBar.module.css';

const SearchBar = ({ value, onChange }) => {
  // console.log(value);
  // console.log(onChange);
  return (
    <input
      type="text"
      placeholder="search"
      className={design.input}
      onChange={onChange}
    />
  );
};

export default SearchBar;
