import React, { FunctionComponent, ReactNode } from 'react';

import styles from './Code.module.scss';

const Code: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.content}>
      <pre className={styles.code}>{children}</pre>
    </div>
  )
}

export default Code;
