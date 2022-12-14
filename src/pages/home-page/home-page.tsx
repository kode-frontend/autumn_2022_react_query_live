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
  isRefetching: boolean;
  onEditCard: (id: string) => void;
  onDeleteCard: (id: string) => void;
};

export const HomePage = ({
  data,
  isLoading,
  isRefetching,
  onEditCard,
  onDeleteCard,
}: Prop) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Wrapper>
      <h1>React Query Example</h1>
      <PostCardList
        data={data}
        onEditCard={onEditCard}
        onDeleteCard={onDeleteCard}
        isLoading={isRefetching}
      />
    </Wrapper>
  );
};
