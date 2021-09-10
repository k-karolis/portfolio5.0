import React, { useContext } from 'react';

import Intro from './Intro/Intro';

import selfie from '../../../assets/self.jpg';
import styles from './LandingPage.module.scss';
import { motion } from 'framer-motion';
import { useContextProvider } from '../../../components/ContextProvider/Provider';

import NameTitle from './NameTitle/NameTitle';

export default function LandingPage() {
  const { isDarkTheme } = useContextProvider();

  return (
    <div className={isDarkTheme ? styles.DarkMode : styles.LightMode}>
      <div className={styles.LandingPage}>
        <NameTitle />
      </div>

      {/* <motion.img
            className={styles.Selfie}
            src={selfie}
            alt="Selfie"
            layout
            key={1}
            initial={{
              // opacity: 0,
              scale: 0,
            }}
            animate={{
              scale: 1,
              // opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.5,
              },
            }}
          /> */}

      {/* <Intro /> */}
    </div>
  );
}
