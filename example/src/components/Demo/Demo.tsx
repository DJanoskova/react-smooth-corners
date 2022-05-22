import { SmoothCorners, SmoothCornersWrapper } from 'react-smooth-corners';

import styles from './Demo.module.scss';
import Code from '../Code/Code';
import { examples, getExampleCode } from '../../const/exampleCode';

function Demo() {
  return (
    <div className={styles.content}>
      {examples.map(example => (
        <div className={styles.exampleWrapper}>
          <div className={styles.example}>
            <Code>
              {getExampleCode(example)}
            </Code>
            <div className={styles.preview}>
              <SmoothCornersWrapper shadow={example.shadow} corners={example.corners}>
                <SmoothCorners
                  corners={example.corners}
                  style={{ width: `${example.width}px`, height: `${example.height}px` }}
                  className={styles.box}
                  as={example.as}
                >
                  {example.children}
                </SmoothCorners>
              </SmoothCornersWrapper>
            </div>
          </div>
          {example.description}
        </div>
      ))}
    </div>
  );
}

export default Demo;
