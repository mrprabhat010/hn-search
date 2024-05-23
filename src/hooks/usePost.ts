// src/hooks/usePost.ts
import { useQuery } from '@tanstack/react-query';

const fetchPostDetails = async (id: string) => {
  const response = await fetch(`https://hn.algolia.com/api/v1/items/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const usePost = (id: string) => {
  return useQuery({
    queryKey: ['postDetails', id],
    queryFn: () => fetchPostDetails(id),
    enabled: !!id, // Ensure the query only runs if `id` is truthy
    staleTime: 1 * 60 * 1000, // Stale time in milliseconds
  });
};
