import React, { ComponentProps, FunctionComponent } from 'react';
import styled from 'styled-components';

const SmoothCornersWrapperEl = styled.div<{
  shadow?: string;
  corners?: number | string;
}>`
  background-size: 100%;
  background-image: paint(smooth-corners);
  width: fit-content;
  height: fit-content;
  filter: ${({ shadow }) => shadow ? 'drop-shadow(' + shadow + ')' : undefined};

  @supports (mask-image: paint(smooth-corners)) {
    --smooth-corners: ${({ corners = 4 }) => `${corners}`};
`;

interface SmoothCornersWrapperProps extends ComponentProps<typeof SmoothCornersWrapperEl> {}

const SmoothCornersWrapper: FunctionComponent<SmoothCornersWrapperProps> = ({ children, ...props }) => {
  if (!props.shadow) return children;

  return (
    <SmoothCornersWrapperEl {...props}>
      {children}
    </SmoothCornersWrapperEl>
  )
}

export default SmoothCornersWrapper;
