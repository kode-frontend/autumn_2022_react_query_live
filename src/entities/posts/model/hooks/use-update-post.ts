import { useMutation } from 'react-query';

const fetcher = async (id: string) => {
  const ID = Number(id);
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify({
        id: ID,
        title: 'Новый пост',
        body: 'Рандомный текст нового поста',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );

  return request.json();
};

export const useUpdatePost = () => {
  return useMutation((id: string) => fetcher(id));
};
