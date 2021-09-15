import React from 'react';
import styles from './LandingPage.module.scss';
import NameTitle from './NameTitle/NameTitle';
import Selfie from './Selfie/Selfie';
import Intro from './Intro/Intro';
import SiteLink from './SiteLink/SiteLink';

export default function LandingPage() {
  return (
    <div className={styles.LandingPage}>
      <div className={styles.NameTitle}>
        <Selfie />
        <NameTitle />
      </div>
      <div className={styles.Intro}>
        <Intro />
      </div>
      <div className={styles.SiteLink}>
        <SiteLink />
      </div>
    </div>
  );
}
