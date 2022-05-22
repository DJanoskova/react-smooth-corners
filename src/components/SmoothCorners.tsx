import React, { ComponentProps, FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';

import attachPaintWorkletScript from '../lib/attachPaintWorkletScript';

const SmoothCornersEl = styled.div<{
  smoothCorners?: number | string;
  borderRadius?: number;
}>`
  border-radius: ${({ borderRadius = 0 }) => `${borderRadius}px`};

  @supports (mask-image: paint(smooth-corners)) {
    --smooth-corners: ${({ smoothCorners = 0 }) => `${smoothCorners}`};
    mask-image: paint(smooth-corners);
  }
`;

interface SmoothCornersProps extends ComponentProps<typeof SmoothCornersEl> {}

const SmoothCorners: FunctionComponent<SmoothCornersProps> = (props) => {
  useEffect(() => {
    attachPaintWorkletScript();
  }, []);

  return (
    <SmoothCornersEl {...props} />
  )
}

export default SmoothCorners;
