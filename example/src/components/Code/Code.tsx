import React, { FunctionComponent } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import editorStyle from './style';

import styles from './Code.module.scss';

const Code: FunctionComponent<{ children: string }> = ({ children }) => {
  return (
    <SyntaxHighlighter className={styles.content} language="javascript" style={editorStyle as any}>
      {children}
    </SyntaxHighlighter>
  )
}

export default Code;
