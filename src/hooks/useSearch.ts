import { useQuery } from '@tanstack/react-query';
import { useSearchStore } from '../Store/searchStore';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDebounce } from './useDebounce';
const fetchSearchResults = async (query: string) => {
  const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { query, setQuery } = useSearchStore();
  const [debouncedQuery] = useDebounce(query, 500); // Debounce the query with a delay of 300ms

  useEffect(() => {
    const urlQuery = searchParams.get('query');
    if (urlQuery !== null && urlQuery !== query) {
      setQuery(urlQuery);
    }
  }, [searchParams, setQuery, query]);

  useEffect(() => {
    if (query !== searchParams.get('query')) {
      setSearchParams({ query });
    }
  }, [query, searchParams, setSearchParams]);

  return useQuery({
    queryKey: ['searchResults', debouncedQuery],
    queryFn: () => fetchSearchResults(debouncedQuery),
    enabled: !!debouncedQuery, // Enable the query only if there is a query
    staleTime: 1 * 60 * 1000, // Stale time in milliseconds
  });
};
