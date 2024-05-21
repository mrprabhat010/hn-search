import { useSearchStore } from '../store/searchStore';

const SearchBar = () => {
  const { query, setQuery } = useSearchStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

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
