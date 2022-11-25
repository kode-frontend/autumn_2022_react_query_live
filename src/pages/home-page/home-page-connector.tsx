import { HomePage } from './home-page';

import { useGetAllPosts } from '../../entities/posts';
import { TPost } from '../../entities/posts/types';

export const HomePageConnector = () => {
  const { data, isLoading } = useGetAllPosts();

  const mappedData: TPost[] =
    data?.map(item => ({
      userId: String(item.useId),
      postId: String(item.id),
      title: item.title,
      text: item.body,
    })) ?? [];

  return <HomePage data={mappedData} isLoading={isLoading} />;
};
