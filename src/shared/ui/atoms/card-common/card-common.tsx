import styled, { css } from 'styled-components';

type Props = {
  maxWidth?: number;
  minWidth?: number;
  padding?: number;
};

export const CardCommon = styled.div<Props>`
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding}px;
    `}

  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth + 'px' : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth + 'px' : 'auto')};

  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 0px 24px rgba(88, 84, 164, 0.08);
  border: 1px solid #27205d;
  border-radius: 6px;
`;
