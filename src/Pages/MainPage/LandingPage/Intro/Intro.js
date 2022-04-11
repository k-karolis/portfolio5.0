import React from "react";

import styles from "./Intro.module.scss";
import { motion } from "framer-motion";
import { useContextProvider } from "../../../../components/ContextProvider/Provider";

export default function Intro() {
  const { isDarkTheme } = useContextProvider();

  const intro = [
    "Hi, my name is Karolis and I am Front End Web Developer.",
    "Currently working at Move The Masses Charity and developing user facing web applications so volunteers can reach out to people in need for help and support.",
    "Open for new opportunities and looking for next challange.",
  ];

  const techList = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express.js",
  ];

  return (
    <div>
      <motion.div
        className={styles.BackGround}
        layout
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.5,
            type: "tween",
          },
          color: isDarkTheme ? "rgb(236, 236, 236)" : "rgb(34, 40, 49)",
        }}>
        <div className={styles.Intro}>
          {intro.map((item, key) => {
            return (
              <motion.article
                key={key}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  color: isDarkTheme ? "rgb(236, 236, 236)" : "rgb(34, 40, 49)",
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: key / 2,
                    type: "tween",
                  },
                }}
                exit={{ opacity: 0 }}>
                <br />
                {item}

                <br />
              </motion.article>
            );
          })}

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
            <motion.div>
              {techList.map((item, key) => {
                return (
                  <motion.span
                    key={key}
                    initial={{
                      opacity: 0,
                      y: key,
                      x: key,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      x: 0,
                      color: isDarkTheme
                        ? "rgb(242, 163, 101)"
                        : "rgb(158, 77, 13)",
                      transition: {
                        delay: 2 + key / 5,
                        duration: 1,
                        type: "tween",
                      },
                    }}
                    exit={{
                      opacity: 0,
                      y: key,
                      x: key,
                    }}>
                    {item}
                  </motion.span>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
