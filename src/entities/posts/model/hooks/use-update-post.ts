import { useMutation, useQueryClient } from 'react-query';

import { QUERY_KEY } from './use-get-all-posts';
import { TPostModel } from './types';

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
  const queryClient = useQueryClient();

  return useMutation((id: string) => fetcher(id), {
    onMutate: id => {
      const currentData = queryClient.getQueryData<TPostModel[]>(QUERY_KEY);

      if (currentData) {
        const newData: TPostModel[] = [];

        currentData.map(item => {
          if (String(item.id) === id) {
            newData.push({
              ...item,
              title: 'Новый пост',
              body: 'Рандомный текст нового поста',
            });
          }
          newData.push(item);
        });

        queryClient.setQueryData(QUERY_KEY, () => newData);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY);
    },
  });
};
