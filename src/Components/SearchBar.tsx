import React, {useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearchStore } from '../store/searchStore';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { query, setQuery } = useSearchStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setSearchParams({ query: newQuery });
  };

useEffect(() => {
    const initialQuery = searchParams.get('query') || '';
    setQuery(initialQuery);
  }, [searchParams, setQuery]);

  return (
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      placeholder="Search Hacker News..."
    />
  );
};

export default SearchBar;
