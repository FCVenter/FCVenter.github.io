// src/components/styled/Container.tsx
import styled from 'styled-components';

interface FlexContainerProps {
  direction?: 'row' | 'column';
  justify?: string;
  align?: string;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
`;

export default FlexContainer;
