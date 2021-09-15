import React from 'react';
import styles from './SiteLink.module.scss';
import { motion } from 'framer-motion';
import { useContextProvider } from '../../../../components/ContextProvider/Provider';

const link = {
  hidden: {
    opacity: 0,
  },
};

export default function SiteLink() {
  const { isDarkTheme } = useContextProvider();
  return (
    <div className={isDarkTheme ? styles.DarkMode : styles.LightMode}>
      <motion.small
        layout
        className={styles.Link}
        variants={link}
        initial="hidden"
        animate={{
          color: isDarkTheme ? 'rgb(242, 163, 101)' : 'rgb(158, 77, 13)',
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.5,
            type: 'tween',
          },
        }}
        exit="hidden">
        www.karoliskimtys.com
      </motion.small>
    </div>
  );
}
