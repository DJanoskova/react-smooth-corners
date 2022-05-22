const exampleCode = `import { SmoothCorners, SmoothCornersWrapper } from 'react-smooth-corners';

const Squircle = () => {
  return (
    <SmoothCorners
      smoothCorners={4}
      style={ width: '200px', height: '200px' }
    />
  );
}

const WithShadow = () => {
  return (
    <SmoothCornersWrapper shadow="0 15px 20px rgb(48, 48, 187, 0.4)">
      <SmoothCorners
        smoothCorners={4}
        style={ width: '200px', height: '200px' }
      />
    </SmoothCornersWrapper>
  );
}`;

export default exampleCode;
