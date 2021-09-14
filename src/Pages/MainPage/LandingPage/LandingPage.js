import React from 'react';
import styles from './LandingPage.module.scss';
import NameTitle from './NameTitle/NameTitle';
import Selfie from './Selfie/Selfie';

export default function LandingPage() {
  return (
    <div className={styles.LandingPage}>
      <div className={styles.NameTitle}>
        <Selfie />
        <NameTitle />
      </div>
    </div>
  );
}
