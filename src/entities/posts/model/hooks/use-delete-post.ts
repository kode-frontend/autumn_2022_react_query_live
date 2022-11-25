import { useMutation } from 'react-query';

const fetcher = (id: string) => {
  const request = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  });
  return request;
};

export const useDeletePost = () => {
  return useMutation((id: string) => fetcher(id));
};
