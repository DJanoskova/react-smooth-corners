import React, { FunctionComponent, useEffect } from 'react';
// import styled from 'styled-components';

interface SmoothCornersProps {
  borderRadius?: number;
  smoothCorners?: number;
  as?: any;
}

// const SmoothCornersEl = styled.div<SmoothCornersProps>`
//   @supports (mask-image: paint(smooth-corners)) {
//     border-radius: ${({ borderRadius }) => `${borderRadius}px`};
//     --smooth-corners: ${({ smoothCorners }) => `${smoothCorners}`};
//
//     & {
//       border-radius: 0;
//       mask-image: paint(smooth-corners);
//     }
//   }
// `;

const SmoothCorners: FunctionComponent<SmoothCornersProps> = ({ borderRadius, smoothCorners, ...props }) => {
  useEffect(() => {
    if ((CSS as any).paintWorklet) {
      const node = document.createElement("script");
      const textnode = document.createTextNode("CSS.paintWorklet.addModule('/static/paint.js')");
      node.appendChild(textnode);
      document.body.appendChild(node);
    }
  }, []);

  const style = {
    borderRadius: `${borderRadius}px`,
    '--smooth-corners': `${smoothCorners}`,
  }

  return (
    <div {...props} style={style}>
      Hello
    </div>
  )
}

export default SmoothCorners;
