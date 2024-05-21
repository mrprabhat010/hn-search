import { useQuery } from '@tanstack/react-query';

const fetchPostDetails = async (id: string) => {
  const response = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);
  return response.json();
};

export const usePost = (id: string) => {
  return useQuery(['postDetails', id], () => fetchPostDetails(id));
};
