import React from 'react';

import styles from './Intro.module.scss';
import SocialIcons from '../SocialIcons/SocialIcons';
import SiteLink from '../SiteLink/SiteLink';
import { motion, AnimatePresence } from 'framer-motion';

export default function Intro() {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.BackGround}
        layout
        key={1}
        initial={{
          // skewY: -5,
          // scaleY: 0,
          opacity: 0,
        }}
        animate={{
          // scaleY: 1,
          // skewY: -5,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}>
        <article className={styles.Intro}>
          Using React, JavaScript, Next.js, and Cypress daily, currently at
          SkyBet. I love building React applications, front end architecture,
          component libraries, and design systems.
        </article>
        <div className={styles.Social}>
          <SocialIcons />
        </div>
      </motion.div>
      <div className={styles.Link}>
        <SiteLink />
      </div>
    </AnimatePresence>
  );
}
