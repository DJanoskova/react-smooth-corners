import React from 'react';
import { SmoothCorners, SmoothCornersWrapper } from 'react-smooth-corners';

import styles, { tileWrapper } from './Tiles.module.scss';

const data = [
  {
    background: '#2b2f49',
    color: '#ffffff',
    icon: '9'
  },
  {
    background: 'linear-gradient(124deg, rgba(52,61,254,1) 0%, rgba(52,129,254,1) 100%)',
    color: '#ffffff',
    icon: '♥︎'
  },
  {
    background: '#ffffff',
    color: '#3194fb',
    icon: '🥲︎'
  },
  {
    background: '#ffffff',
    color: '#afdec3',
    icon: '🇨🇿'
  },
  {
    background: '#241f21',
    color: '#ffffff',
    icon: 'A'
  },
  {
    background: '#2b2f49',
    color: '#ffffff',
    icon: '🛠'
  },
]

const Tiles = () => {
  return (
    <div className={styles.container}>
      {data.map(({ background, color, icon }) => (
        <SmoothCornersWrapper
          className={styles.tileWrapper}
          corners="3"
          shadow="-15px 15px 20px #425be2"
        >
          <SmoothCorners style={{ color, background }} className={styles.tile} corners={3}>
            {icon}
          </SmoothCorners>
        </SmoothCornersWrapper>
      ))}
    </div>
  )
}

export default Tiles;
