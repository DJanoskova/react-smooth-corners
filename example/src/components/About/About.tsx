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
    </div>
  )
}

export default About;
