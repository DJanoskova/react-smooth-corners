import React from 'react';

import styles from './Example.module.scss';

import exampleCode from '../const/exampleCode';

const Example = () => {
  return (
    <div className={styles.content}>
      <pre className={styles.code}>{exampleCode}</pre>
    </div>
  )
}

export default Example;
