import React, { ComponentProps, FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';

import getSmoothCornersScript from '../lib/getSmoothCornersScript';

const SmoothCornersEl = styled.div<{
  smoothCorners?: number;
  borderRadius?: number;
}>`
  @supports (mask-image: paint(smooth-corners)) {
    border-radius: ${({ borderRadius = 0 }) => `${borderRadius}px`};
    --smooth-corners: ${({ smoothCorners = 0 }) => `${smoothCorners}`};

    & {
      border-radius: 0;
      mask-image: paint(smooth-corners);
    }
  }
`;

interface SmoothCornersProps extends ComponentProps<typeof SmoothCornersEl> {
  smoothCorners?: number;
  borderRadius?: number;
}

const SmoothCorners: FunctionComponent<SmoothCornersProps> = (props) => {
  console.log('render');

  useEffect(() => {
    console.log('mount');
    if ((CSS as any).paintWorklet) {
      const node = document.createElement("script");
      const content = `CSS.paintWorklet.addModule("${getSmoothCornersScript()}")`;
      console.log('con', getSmoothCornersScript());
      const textnode = document.createTextNode(content);

      node.appendChild(textnode);
      document.body.appendChild(node);
    }

    return () => {
      console.log('unmount');
    }
  }, []);

  return (
    <SmoothCornersEl {...props} />
  )
}

export default SmoothCorners;
