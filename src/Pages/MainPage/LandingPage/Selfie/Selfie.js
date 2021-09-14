import React from 'react';
import styles from './Selfie.module.scss';
import selfie from '../../../../assets/self.jpg';

export default function Selfie() {
  return (
    <div className={styles.Selfie}>
      <img src={selfie} alt="" />
    </div>
  );
}
