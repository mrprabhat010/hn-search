import React, { useState } from 'react';
import { useSearchStore } from '../Store/searchStore';
import styles from './SearchBar.module.css';

const SearchBar: React.FC = () => {
  const { query, setQuery } = useSearchStore();
  const [inputValue, setInputValue] = useState(query);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setQuery(inputValue);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search Hacker News"
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.button}>Search</button>
    </div>
  );
};

export default SearchBar;
