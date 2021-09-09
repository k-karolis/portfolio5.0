import { useContext } from 'react';
import styles from './Bounce.module.scss';
import { ThemeMode } from '../ThemeProvider/ThemeProvider';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const box = {
  hidden: {
    opacity: 0,
  },
};

export default function Bounce() {
  const { theme } = useContext(ThemeMode);

  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.45,
    triggerOnce: true,
  });

  const title = {
    visible: { opacity: 1, scale: 1, x: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      x: 50,
    },
  };

  return (
    <ThemeMode.Consumer>
      {(context) => (
        <div className={styles.Bounce}>
          <div className={theme ? styles.DarkMode : styles.LightMode}>
            <motion.div
              animate={inView ? 'visible' : 'hidden'}
              variants={title}
              transition={{
                delay: 0.05,
                duration: 1.5,
                type: 'spring',
                stiffness: 100,
              }}
              ref={ref}>
              <motion.div
                layout
                variants={box}
                initial="hidden"
                animate={{
                  color: theme ? 'rgb(242, 163, 101)' : 'rgb(236, 236, 236)',
                  scale: 1,
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.05,
                    duration: 1.5,
                    type: 'spring',
                    stiffness: 1000,
                  },
                }}
                exit="hidden">
                <div>Front End Web Developer</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
    </ThemeMode.Consumer>
  );
}
