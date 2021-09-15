import React from 'react';
import styles from './Selfie.module.scss';
import selfie from '../../../../assets/self.webp';
import { motion } from 'framer-motion';
import { useContextProvider } from '../../../../components/ContextProvider/Provider';

const self = {
  hidden: {
    opacity: 0,
  },
};

export default function Selfie() {
  const { isDarkTheme } = useContextProvider();

  return (
    <div className={styles.Selfie}>
      <motion.img
        src={selfie}
        alt=""
        variants={self}
        initial="hidden"
        animate={{
          color: isDarkTheme ? 'rgb(242, 163, 101)' : 'rgb(158, 77, 13)',
          opacity: 1,
          transition: {
            duration: 0.75,
            type: 'tween',
          },
        }}
        exit="hidden"
      />
    </div>
  );
}
