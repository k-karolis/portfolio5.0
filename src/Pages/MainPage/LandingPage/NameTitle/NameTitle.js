import styles from './NameTitle.module.scss';
import { motion } from 'framer-motion';
import { useContextProvider } from '../../../../components/ContextProvider/Provider';

export default function NameTitle() {
  const { isDarkTheme } = useContextProvider();

  const firstName = 'Karolis';
  const lastName = 'Kimtys';
  const title = 'Front End Web Developer';

  const firstVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: {
      opacity: 0,
      x: 50,
    },
  };

  const lastVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: {
      opacity: 0,
      x: -75,
    },
  };

  const titleVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };

  const underlineVariant = {
    hidden: { opacity: 1, scale: 0, rotate: -3 },
  };

  return (
    <div className={isDarkTheme ? styles.DarkMode : styles.LightMode}>
      <div className={styles.NameContainer}>
        <motion.div
          className={styles.FirstName}
          layout
          variants={firstVariant}
          initial="hidden"
          animate={{
            color: isDarkTheme ? 'rgb(34, 40, 49)' : 'rgb(236, 236, 236)',
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.75,
              delay: 0.0025,
              type: 'tween',
            },
          }}
          exit="hidden">
          {firstName}
        </motion.div>
        <motion.div
          className={styles.LastName}
          layout
          variants={lastVariant}
          initial="hidden"
          animate={{
            color: isDarkTheme ? 'rgb(34, 40, 49)' : 'rgb(236, 236, 236)',
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.75,
              delay: 0.05,
              type: 'tween',
            },
          }}
          exit="hidden">
          {lastName}
        </motion.div>
        <motion.div
          className={styles.Title}
          layout
          variants={titleVariant}
          initial="hidden"
          animate={{
            color: isDarkTheme ? 'rgb(34, 40, 49)' : 'rgb(236, 236, 236)',
            opacity: 1,
            rotate: -3,
            x: 0,
            transition: {
              duration: 0.75,
              delay: 0.1,
              type: 'tween',
            },
          }}
          exit="hidden">
          {title}
        </motion.div>
        <motion.div
          className={styles.Underline}
          layout
          variants={underlineVariant}
          initial="hidden"
          animate={{
            backgroundColor: isDarkTheme
              ? 'rgb(34, 40, 49)'
              : 'rgb(236, 236, 236)',
            opacity: 1,
            rotate: -3,
            scale: 1.1,
            transition: {
              duration: 1,
              delay: 1.5,
              type: 'tween',
            },
          }}
          exit="hidden"
        />
      </div>
    </div>
  );
}
