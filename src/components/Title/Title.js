import { useContext } from 'react';
import styles from './Title.module.scss';
import { ThemeMode } from '../ThemeProvider/ThemeProvider';
import { motion } from 'framer-motion';

const box = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
};

export default function Title() {
  const { theme } = useContext(ThemeMode);

  const first = {
    visible: { opacity: 1, scale: 1 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      // x: 50,
    },
  };

  const second = {
    visible: { opacity: 1, scale: 1 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      // x: -50,
    },
  };

  return (
    <ThemeMode.Consumer>
      {(context) => (
        <div className={theme ? styles.DarkMode : styles.LightMode}>
          <div className={styles.Title}>
            <h1 className={styles.First}>
              <div className={theme ? styles.DarkMode : styles.LightMode}>
                <motion.div
                  variants={first}
                  transition={{
                    duration: 1,
                    ease: [0.42, 0, 0.58, 1],
                  }}>
                  <motion.div
                    layout
                    variants={box}
                    initial="hidden"
                    animate={{
                      color: theme ? 'rgb(34, 40, 49)' : 'rgb(236, 236, 236)',
                      scale: 1,
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 0.05,
                        duration: 1.5,
                        type: 'spring',
                        stiffness: 100,
                      },
                    }}
                    exit="hidden">
                    <div>Karolis</div>
                  </motion.div>
                </motion.div>
              </div>
            </h1>
            <h3 className={styles.Second}>
              <div className={theme ? styles.DarkMode : styles.LightMode}>
                <motion.div
                  variants={second}
                  transition={{
                    delay: 0.25,
                    duration: 1,
                    ease: [0.42, 0, 0.58, 1],
                  }}>
                  <motion.div
                    layout
                    variants={box}
                    initial="hidden"
                    animate={{
                      color: theme ? 'rgb(34, 40, 49)' : 'rgb(242, 163, 101)',
                      scale: 1,
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 0.1,

                        type: 'spring',
                        stiffness: 100,
                      },
                    }}
                    exit="hidden">
                    <div>Kimtys</div>
                  </motion.div>
                </motion.div>
              </div>
            </h3>
          </div>
        </div>
      )}
    </ThemeMode.Consumer>
  );
}
