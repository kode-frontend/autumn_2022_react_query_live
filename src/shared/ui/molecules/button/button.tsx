import styled from 'styled-components';

import { ButtonInner } from '../../atoms';
import { TSkewButtonColors } from '../../atoms/button-inner/types';

const ButtonElement = styled(ButtonInner)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid #27205d;
  border-radius: 6px;
`;

type TButtonVariant = 'primary' | 'secondary';

const colors: Record<TButtonVariant, TSkewButtonColors> = {
  primary: {
    background: {
      active: '#27205D',
      hover: '#5854A4',
    },

    text: {
      active: '#FFFFFF',
      hover: '#FFFFFF',
    },
  },
  secondary: {
    background: {
      active: '#FFFFFF',
      hover: '#c3c0c0',
    },
    text: {
      active: '#27205D',
      hover: '#27205D',
    },
  },
};

type Props = {
  text: string;
  variant?: TButtonVariant;
  disabled?: boolean;
  onClick: () => void;
};

export const Button = ({
  text,
  variant = 'primary',
  disabled,
  onClick,
}: Props) => {
  return (
    <ButtonElement
      background={colors[variant].background}
      text={colors[variant].text}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </ButtonElement>
  );
};
