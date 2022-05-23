import React from 'react';

import styles from './About.module.scss';
import editorStyle from '../Code/style';
import SyntaxHighlighter from 'react-syntax-highlighter';

const About = () => {
  const code = `import { SmoothCorners } from 'react-smooth-corners'
  
const Button = () => {
  return (
    <SmoothCorners
      corners="12, 3"
      borderRadius="12px"
      style={ padding: '10px 30px', background: 'blue' }
      as="button"
    >
      Click to view
    </SmoothCorners>
  )
}`;

  return (
    <div className={styles.content}>
      <h2>Plug & Play</h2>
      <p>
        Import the SmoothCorners component, specify the corners value and let the magic do everything for you ✨
      </p>
      <SyntaxHighlighter className={styles.content} language="javascript" style={editorStyle as any}>
        {code}
      </SyntaxHighlighter>
      <p>
        Add a fallback border-radius value for browsers that don't support <code>mask-image</code> and/or <code>CSS Paint Worklet</code>.
      </p>
    </div>
  )
}

export default About;
