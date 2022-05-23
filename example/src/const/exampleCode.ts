import { ReactNode } from 'react';

export const examples = [
  {
    width: 80,
    height: 80,
    corners: '3',
    borderRadius: '25px',
  },
  {
    width: 170,
    height: 170,
    corners: 5,
    borderRadius: '20px',
    shadow: '0 15px 20px rgb(48, 48, 187, 0.4)',
    description: 'A Squircle with a shadow'
  },
  {
    width: 160,
    height: 50,
    borderRadius: '10px',
    corners: '12, 3',
    as: 'button',
    children: 'Click me',
    description: 'Provide two values for different X and Y angles'
  },
  {
    width: 150,
    height: 150,
    corners: '0.6',
    description: 'Values <1 create an inside curve'
  },
]

export const getExampleCode = ({ width = 200, height = 200, corners = 4, shadow = '', as = '', borderRadius }: {
  width?: number;
  height?: number;
  corners?: number | string;
  borderRadius?: string;
  shadow?: string;
  as?: string;
  children?: ReactNode;
}) => {
  let code = '';

  let innerCode = `corners="${corners}"
      style={ width: '${width}px', height: '${height}px' }`;

  if (as) innerCode += `
      as="${as}"`;

  if (borderRadius) innerCode += `
      borderRadius="${borderRadius}"`;

  innerCode = `<SmoothCorners
      ${innerCode}
    />`

  if (shadow) {
    code = `<SmoothCornersWrapper
      corners="${corners}"
      borderRadius="20px"
      shadow="0 15px 20px rgb(48, 48, 187, 0.4)"
    >
      ${innerCode}
    </SmoothCornersWrapper>`
  } else {
    code = innerCode;
  }

  const result = `const Component = () => {
  return (
    ${code}
  );
}`;

  return result;
};
