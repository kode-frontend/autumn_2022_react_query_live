import { useQuery } from 'react-query';

import { TPostModel } from './types';

export const QUERY_KEY = 'posts';
const STALE_TIME = 1000 * 60 * 10; //10 min

const fetcher = async (): Promise<TPostModel[]> => {
  const request = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = request.json();
  return data;
};

export const useGetAllPosts = () => {
  return useQuery(QUERY_KEY, fetcher, {
    staleTime: STALE_TIME,
  });
};
