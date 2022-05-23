import React from 'react';
import { SmoothCorners, SmoothCornersWrapper } from 'react-smooth-corners';

import styles from './Tiles.module.scss';

const data = [
  {
    background: '#2b2f49',
    color: '#ffffff',
    icon: '☁️'
  },
  {
    background: 'linear-gradient(124deg, rgba(52,61,254,1) 0%, rgba(52,129,254,1) 100%)',
    color: '#ffffff',
    icon: '🤍︎'
  },
  {
    background: '#ffffff',
    color: '#3194fb',
    icon: '💧'
  },
  {
    background: '#ffffff',
    color: '#afdec3',
    icon: '🦑'
  },
  {
    background: 'linear-gradient(124deg, rgba(31,193,226,1) 0%, rgba(114,255,249,1) 100%)',
    color: '#ffffff',
    icon: '🦋'
  },
  {
    background: '#241f21',
    color: '#ffffff',
    icon: '🧢'
  },
]

const Tiles = () => {
  return (
    <div className={styles.container}>
      {data.map(({ background, color, icon }) => (
        <SmoothCornersWrapper
          className={styles.tileWrapper}
          corners="2.5"
          shadow="-15px 15px 20px #425be2"
          borderRadius="70px"
        >
          <SmoothCorners style={{ color, background }} className={styles.tile} corners={3} borderRadius="70px">
            {icon}
          </SmoothCorners>
        </SmoothCornersWrapper>
      ))}
    </div>
  )
}

export default Tiles;
