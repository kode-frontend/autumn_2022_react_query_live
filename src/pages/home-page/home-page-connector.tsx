import { HomePage } from './home-page';

import {
  useDeletePost,
  useGetAllPosts,
  useUpdatePost,
} from '../../entities/posts';
import { TPost } from '../../entities/posts/types';

export const HomePageConnector = () => {
  const {
    data: postsData,
    isLoading,
    refetch,
    isRefetching,
  } = useGetAllPosts();
  const { mutateAsync: editMutation } = useUpdatePost();
  const { mutateAsync: deleteMutation } = useDeletePost();

  const mappedData: TPost[] =
    postsData?.map(item => ({
      userId: String(item.useId),
      postId: String(item.id),
      title: item.title,
      text: item.body,
    })) ?? [];

  const onEditCard = (id: string) => {
    editMutation(id);
  };

  const onDeleteCard = (id: string) => {
    deleteMutation(id).finally(() => {
      refetch();
    });
  };

  return (
    <HomePage
      data={mappedData}
      isLoading={isLoading}
      isRefetching={isRefetching}
      onEditCard={onEditCard}
      onDeleteCard={onDeleteCard}
    />
  );
};
