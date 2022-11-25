import styled from 'styled-components';

import { CardCommon } from '../../../shared/ui/atoms';
import { Button } from '../../../shared/ui/molecules';

import { TPost } from '../types';

const Card = styled(CardCommon)`
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Text = styled.p`
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
`;

const ActionsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

type Props = TPost & {
  isLoading?: boolean;
  onEditCard?: (id: string) => void;
  onDeleteCard?: (id: string) => void;
};

export const PostCard = ({
  postId,
  text,
  title,
  isLoading,
  onDeleteCard,
  onEditCard,
}: Props) => {
  const hasActions = Boolean(onDeleteCard) || Boolean(onEditCard);

  return (
    <Card padding={16} maxWidth={282} minWidth={282}>
      <div>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </div>
      {hasActions && (
        <ActionsWrapper>
          {onEditCard && (
            <Button
              text="Edit"
              disabled={isLoading}
              onClick={() => onEditCard(postId)}
            />
          )}
          {onDeleteCard && (
            <Button
              variant="secondary"
              text="Delete"
              disabled={isLoading}
              onClick={() => onDeleteCard(postId)}
            />
          )}
        </ActionsWrapper>
      )}
    </Card>
  );
};
