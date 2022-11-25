import styled from 'styled-components';

import { TSkewButtonColors } from './types';

type Props = TSkewButtonColors;

export const ButtonInner = styled.button<Props>`
  display: flex;
  outline: none;
  border: none;
  padding: 12px;
  background-color: ${({ background }) => background.active};
  color: ${({ text }) => text.active};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: ${({ background }) => background.hover};
    color: ${({ text }) => text.hover};
  }
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;
