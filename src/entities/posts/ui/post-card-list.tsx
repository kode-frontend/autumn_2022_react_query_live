import { Fragment } from 'react';
import styled from 'styled-components';

import { TPost } from '../types';
import { PostCard } from './post-card';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

type Props = {
  data: TPost[];
  isLoading?: boolean;
  onEditCard?: (id: string) => void;
  onDeleteCard?: (id: string) => void;
};

export const PostCardList = ({
  data,
  isLoading,
  onEditCard,
  onDeleteCard,
}: Props) => {
  return (
    <Wrapper>
      {data.map((item, index) => (
        <Fragment key={index}>
          <PostCard
            {...item}
            isLoading={isLoading}
            onEditCard={onEditCard}
            onDeleteCard={onDeleteCard}
          />
        </Fragment>
      ))}
    </Wrapper>
  );
};
