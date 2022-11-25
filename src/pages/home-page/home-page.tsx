import styled from 'styled-components';

import { PostCardList } from '../../entities/posts';
import { TPost } from '../../entities/posts/types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

type Prop = {
  data: TPost[];
  isLoading: boolean;
};

export const HomePage = ({ data, isLoading }: Prop) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Wrapper>
      <h1>React Query Example</h1>
      <PostCardList data={data} />
    </Wrapper>
  );
};
