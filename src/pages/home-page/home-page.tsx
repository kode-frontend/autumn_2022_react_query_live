import styled from 'styled-components';

import { PostCardList } from '../../entities/posts';
import { TPost } from '../../entities/posts/types';

const data: TPost[] = [
  {
    postId: '1',
    userId: '1',
    title: 'Название поста',
    text: 'Текст поста',
  },
  {
    postId: '2',
    userId: '1',
    title: 'Название поста 2',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, harum nesciunt unde veniam velit accusantium blanditiis nemo expedita excepturi mollitia, sunt consequuntur, explicabo totam facere eius tenetur doloremque eum amet!',
  },
  {
    postId: '3',
    userId: '1',
    title: 'Название поста 3',
    text: 'Dolor, harum nesciunt unde veniam velit accusantium blanditiis nemo expedita excepturi mollitia, sunt consequuntur, explicabo totam facere eius tenetur doloremque eum amet!',
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HomePage = () => {
  return (
    <Wrapper>
      <h1>React Query Example</h1>
      <PostCardList data={data} />
    </Wrapper>
  );
};
