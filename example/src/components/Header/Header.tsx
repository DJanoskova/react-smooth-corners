import React from 'react';

import styles from './Header.module.scss';
import Tiles from '../Tiles/Tiles';
import TilesFrosted from '../Tiles/TilesFrosted';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>
          Use smooth corners in your React application
        </h1>
        <h3>
          Leverage the CSS Houdini API and the <a href="https://github.com/wopian/smooth-corners"
                                                  target="_blank" rel="noreferrer">wopian/smooth-corners</a> npm package to create a
          rounded corner look for your React elements
        </h3>
        <h3>
          <code>npm install <a href="https://github.com/DJanoskova/react-smooth-corners" target="_blank" rel="noreferrer">react-smooth-corners</a> --save</code>
        </h3>
      </div>
      <div className={styles.tilesWrapper}>
        <div className={styles.tiles}>
          <Tiles/>
        </div>
        <div className={styles.tilesFrosted}>
          <TilesFrosted/>
        </div>
        <div className={styles.tilesFrosted2}>
          <TilesFrosted/>
        </div>
      </div>
    </div>
  )
}

export default Header;
