import React from 'react';
import styles from './ThemeToggle.module.scss';
import Sun from '../../assets/Sun';
import Moon from '../../assets/Moon';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';
import light from '../../assets/light.mp3';
import { useContextProvider } from '../ContextProvider/Provider';

export default function ThemeToggle() {
  const [on] = useSound(light, { volume: 0.1 });

  const { isDarkTheme, setIsDarkTheme } = useContextProvider();

  const duration = 1.1;

  const moon = {
    hidden: {
      opacity: 0,
      transition: { duration: duration },
    },
    visible: { opacity: 1, transition: { duration: duration } },
  };
  const sun = {
    hidden: { opacity: 0, transition: { duration: duration } },
    visible: { opacity: 1, transition: { duration: duration } },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <div className={isDarkTheme ? styles.LightMode : styles.DarkMode}>
        <div onClick={() => on()} className={styles.Toggle}>
          <div
            onClick={() => {
              setIsDarkTheme(!isDarkTheme);
            }}>
            {isDarkTheme ? (
              <motion.div
                className={styles.Sun}
                layout
                key={1}
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
                key={2}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={moon}>
                <Moon />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
