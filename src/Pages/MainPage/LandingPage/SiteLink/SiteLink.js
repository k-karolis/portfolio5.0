import React, { useContext } from 'react';

import styles from './SiteLink.module.scss';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const link = {
  hidden: {
    opacity: 0,
    y: -35,
  },
};

// color: theme ? "rgb(242, 163, 101)" : "rgb(236, 236, 236)",

export default function SiteLink() {
  return (
    <div className={'theme' ? styles.DarkMode : styles.LightMode}>
      <motion.small
        layout
        className={styles.Link}
        key={uuidv4()}
        variants={link}
        initial="hidden"
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1,
            // duration: 0.25,
            type: 'spring',
            stiffness: 100,
          },
        }}
        exit="hidden">
        www.karoliskimtys.com
      </motion.small>
    </div>
  );
}
