import React from 'react';
import { SmoothCorners } from 'react-smooth-corners';

import styles from './Tiles.module.scss';

const Tiles = () => {
  return (
    <div className={styles.row}>
      <div className={styles.column}>
        <div className={styles.row}>
          <SmoothCorners className={`${styles.tile} ${styles.tileW1}`}/>
          <SmoothCorners className={`${styles.tile} ${styles.tileW1} ${styles.transparent}`}/>
        </div>
        <SmoothCorners className={`${styles.tile} ${styles.tileAuto}`}/>
      </div>
      <div>
        <SmoothCorners className={`${styles.tile} ${styles.tileH3} ${styles.transparent}`} corners="3, 10"/>
      </div>
    </div>
  )
}

export default Tiles;
