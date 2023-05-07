import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './searchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className={styles['search-form']} onSubmit={handleFormSubmit}>
      <div className={styles['search-bar']}>
        <input
          className={styles['search-input']}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <button type="submit" className={styles['search-icon-button']}>
          <FaSearch className={styles['search-icon']} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
