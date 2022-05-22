import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>
          Use smooth corners in your React application
        </h1>
        <h2>
          Leverage the CSS Houdini API and the <a href="https://github.com/wopian/smooth-corners" target="_blank">wopian/smooth-corners</a> npm package to create a rounded corner look for your React elements
        </h2>
        <h3>
          <code>npm install react-smooth-corners</code>
        </h3>
      </div>
    </div>
  )
}

export default Header;
