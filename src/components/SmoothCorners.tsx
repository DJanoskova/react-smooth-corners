import React, { ComponentProps, FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';

import attachPaintWorkletScript from '../lib/attachPaintWorkletScript';

interface SmoothCornersAttributes {
  corners?: number | string;
  borderRadius?: string;
}

const SmoothCornersEl = styled.div<SmoothCornersAttributes>`
  border-radius: ${({ borderRadius = '0px' }) => borderRadius};

  @supports (mask-image: paint(smooth-corners)) {
    border-radius: 0;
    --smooth-corners: ${({ corners = 4 }) => `${corners}`};
    mask-image: paint(smooth-corners);
  }
`;

interface SmoothCornersProps extends SmoothCornersAttributes, ComponentProps<typeof SmoothCornersEl> {}

const SmoothCorners: FunctionComponent<SmoothCornersProps> = (props) => {
  useEffect(() => {
    attachPaintWorkletScript();
  }, []);

  return (
    <SmoothCornersEl {...props} />
  )
}

export default SmoothCorners;
