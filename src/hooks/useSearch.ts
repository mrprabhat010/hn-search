import { useQuery } from '@tanstack/react-query';
import { useSearchStore } from '../store/searchStore';

const fetchSearchResults = async (query: string) => {
  const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
  return response.json();
};

export const useSearch = () => {
  const { query } = useSearchStore();
  return useQuery(['searchResults', query], () => fetchSearchResults(query), {
    enabled: !!query,
  });
};
