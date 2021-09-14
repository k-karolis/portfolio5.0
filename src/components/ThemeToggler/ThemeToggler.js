import React, { useState } from 'react';
import styles from './ThemeToggler.module.scss';
import Sun from '../../assets/Sun';
import Moon from '../../assets/Moon';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';
import light from '../../assets/light.mp3';
import { useContextProvider } from '../ContextProvider/Provider';

export default function ThemeToggler() {
  const { isDarkTheme, setIsDarkTheme } = useContextProvider();

  const [isCorner, setIsCorner] = useState(true);

  const [on] = useSound(light, { volume: 0.1 });

  const duration = 1.1;

  const moon = {
    hidden: {
      opacity: 0,
      transition: { duration: duration, delay: 1 },
    },
    visible: { opacity: 1, transition: { duration: duration, delay: 0.75 } },
  };
  const sun = {
    hidden: { opacity: 0, transition: { duration: duration, delay: 1 } },
    visible: { opacity: 1, transition: { duration: duration, delay: 0.75 } },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <div
        onClick={() => {
          on();
          setIsDarkTheme(!isDarkTheme);
          setIsCorner(!isCorner);
        }}
        className={styles.Toggle}>
        <motion.div
          className={isDarkTheme ? styles.WhiteCorner : styles.BlueCorner}
          key={1}
          initial={{
            rotateY: 180,
            rotate: 135,
          }}
          animate={{}}
          exit={{
            rotateY: 0,
          }}
        />

        {isDarkTheme ? (
          <motion.div
            className={styles.Sun}
            layout
            key={2}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sun}>
            <Sun />
          </motion.div>
        ) : (
          <motion.div
            className={styles.Moon}
            layout
            key={3}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={moon}>
            <Moon />
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
