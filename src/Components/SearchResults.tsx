import { useSearch } from '../hooks/useSearch';
import { Link } from 'react-router-dom';

const SearchResults = () => {
  const { data, error, isLoading } = useSearch();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading results</div>;

  return (
    <ul>
      {data.hits.map((result: any) => (
        <li key={result.objectID}>
          <Link to={`/post/${result.objectID}`}>{result.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
