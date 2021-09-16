import React, { useState } from 'react';

import styles from './Intro.module.scss';
import { motion } from 'framer-motion';
import { useContextProvider } from '../../../../components/ContextProvider/Provider';

export default function Intro() {
  const { isDarkTheme } = useContextProvider();

  const techs = {
    hidden: {
      opacity: 0,
      y: 35,
    },
  };

  const techList = [
    'JavaScript',
    'React',
    'React Hooks',
    'React Router',
    'Framer Motion',
    'Node.js',
    'Python',
    'Jest',
    'React Testing Library',
    'MongoDB',
    'Firebase',
    'Netlify',
    'Heroku',
    'Express.js',
  ];

  const min = 0;
  const minNeg = -techList.length;
  const max = techList.length;

  const [isBorderWide, setIsBorderWide] = useState(false);
  return (
    <div>
      <motion.div
        className={styles.BackGround}
        layout
        key={1}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.5,
            type: 'tween',
          },
          color: isDarkTheme ? 'rgb(236, 236, 236)' : 'rgb(34, 40, 49)',
        }}
        onAnimationComplete={() => {
          setIsBorderWide(true);
        }}>
        <motion.div
          key={2}
          className={styles.Intro}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
              // delay: 1,
            },
          }}>
          <motion.article
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 1,
                type: 'tween',
              },
            }}>
            Hi there, my name is Karolis and I am Front End Web Developer.
          </motion.article>
          <br />
          <motion.article
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 1.25,
                type: 'tween',
              },
            }}>
            Currently working at Move The Masses Charity and developing user
            facing web applications so volunteers can reach out to people in
            need of help and support.
          </motion.article>
          <br />
          <motion.article
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 1.5,
                type: 'tween',
              },
            }}>
            I love using JavaScript and building React applications.
          </motion.article>
          <br />
          <motion.div
            className={styles.Tech}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 2,
              },
            }}
            exit={{ opacity: 0 }}>
            {techList.map((item, key) => {
              const randomPos = Math.floor(
                Math.random() * (max - min + 1) + min
              );
              const randomNeg = Math.floor(
                Math.random() * (max - minNeg + 1) + minNeg
              );
              return (
                <motion.span
                  key={key}
                  variants={techs}
                  initial={{
                    opacity: 0,
                    y: randomPos * 5,
                    x: randomNeg * 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    x: 0,
                    color: isDarkTheme
                      ? 'rgb(242, 163, 101)'
                      : 'rgb(158, 77, 13)',
                    transition: {
                      delay: 1 + randomPos / 5,
                      duration: 1,
                      type: 'tween',
                    },
                  }}
                  exit="hidden">
                  {item}
                </motion.span>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
