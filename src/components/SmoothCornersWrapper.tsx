import React, { ComponentProps, FunctionComponent } from 'react';
import styled from 'styled-components';

const SmoothCornersWrapperEl = styled.div<{
  shadow?: string;
  corners?: number | string;
  borderRadius?: string;
}>`
  background-size: 100%;
  background-image: paint(smooth-corners);
  width: fit-content;
  height: fit-content;
  border-radius: ${({ borderRadius = '0px' }) => borderRadius};
  filter: ${({ shadow }) => shadow ? 'drop-shadow(' + shadow + ')' : undefined};

  @supports (mask-image: paint(smooth-corners)) {
    border-radius: 0;
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
