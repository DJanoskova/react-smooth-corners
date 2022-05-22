import React, { ComponentProps, FunctionComponent } from 'react';
import styled from 'styled-components';

const SmoothCornersWrapperEl = styled.div<{
  shadow?: string;
}>`
  background-size: 100%;
  background-image: paint(smooth-corners);
  filter: ${({ shadow }) => shadow ? 'drop-shadow(' + shadow + ')' : undefined};
`;

interface SmoothCornersWrapperProps extends ComponentProps<typeof SmoothCornersWrapperEl> {}

const SmoothCornersWrapper: FunctionComponent<SmoothCornersWrapperProps> = ({ children, ...props }) => {
  return (
    <SmoothCornersWrapperEl {...props}>
      {children}
    </SmoothCornersWrapperEl>
  )
}

export default SmoothCornersWrapper;
