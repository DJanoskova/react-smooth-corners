import React from 'react';
import { SmoothCorners } from 'react-smooth-corners';

import styles from './Tiles.module.scss';

const TilesFrosted = () => {
  return (
    <div className={styles.column}>
      <SmoothCorners className={`${styles.tileFrosted} ${styles.tileW2}`}/>
      <div className={styles.row}>
        <SmoothCorners className={`${styles.tileFrosted} ${styles.tileW1}`}/>
        <SmoothCorners className={`${styles.tileFrosted} ${styles.tileW1}`}/>
      </div>
    </div>
  )
}

export default TilesFrosted;
