import { ChangeEvent, useState } from 'react';
import { SmoothCorners, SmoothCornersWrapper } from 'react-smooth-corners';

import styles from './Configure.module.scss';
import Example from '../Example/Example';

function Configure() {
  const [properties, setProperties] = useState({
    smoothCorners: 4,
    borderRadius: 0,
    width: 200,
    height: 200,
  });
  const { smoothCorners, width, height, borderRadius } = properties;

  const handlePropertySet = (propertyName: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setProperties(prev => ({
      ...prev,
      [propertyName]: Number(e.target.value)
    }))
  };

  const options = [
    {
      label: 'Smooth corners',
      value: smoothCorners,
      step: 0.1,
      max: 10,
      onChange: handlePropertySet('smoothCorners'),
    },
    {
      label: 'Border radius',
      value: borderRadius,
      max: 50,
      onChange: handlePropertySet('borderRadius'),
    },
    {
      label: 'Width',
      value: width,
      onChange: handlePropertySet('width'),
      max: 500,
      min: 50,
    },
    {
      label: 'Height',
      value: height,
      onChange: handlePropertySet('height'),
      max: 500,
      min: 50,
    }
  ]

  return (
    <div className={styles.content}>

      <div className={styles.config}>
        <Example />
      </div>

      <div className={styles.right}>
        <table>
          <tbody>
          {options.map(({ label, value, ...inputProps }) => (
            <tr key={label}>
              <td>
                {label}
              </td>
              <td>
                <input type="range" value={value} {...inputProps} />
              </td>
              <td>
                {value}
              </td>
            </tr>
          ))}
          </tbody>
        </table>

        <div className={styles.preview}>
          <SmoothCornersWrapper shadow="0 15px 20px rgb(48, 48, 187, 0.4)">
            <SmoothCorners
              smoothCorners={smoothCorners}
              style={{ width: `${width}px`, height: `${height}px`, borderRadius: `${borderRadius}px` }}
              className={styles.box}
            />
          </SmoothCornersWrapper>
        </div>
      </div>
    </div>
  );
}

export default Configure;
