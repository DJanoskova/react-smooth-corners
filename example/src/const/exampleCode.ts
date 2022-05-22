import { ReactNode } from 'react';

export const examples = [
  {
    width: 80,
    height: 80,
    smoothCorners: '3',
  },
  {
    width: 170,
    height: 170,
    smoothCorners: 5,
    shadow: '0 15px 20px rgb(48, 48, 187, 0.4)',
    description: 'A Squircle with a shadow'
  },
  {
    width: 160,
    height: 50,
    smoothCorners: '12, 3',
    as: 'button',
    children: 'Click me',
    description: 'Provide two values for different X and Y angles'
  },
  {
    width: 150,
    height: 150,
    smoothCorners: '0.6',
    description: 'Values <1 create an inside curve'
  },
]

export const getExampleCode = ({ width = 200, height = 200, smoothCorners = 4, shadow = '', as = '', children }: {
  width?: number;
  height?: number;
  smoothCorners?: number | string;
  shadow?: string;
  as?: string;
  children?: ReactNode;
}) => {
  let code = '';

  let innerCode = `smoothCorners="${smoothCorners}"
      style={ width: '${width}px', height: '${height}px' }`;

  if (as) innerCode += `
      as="${as}"`;

  innerCode = `<SmoothCorners
      ${innerCode}
    />`

  if (shadow) {
    code = `<SmoothCornersWrapper
      smoothCorners="${smoothCorners}"
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
