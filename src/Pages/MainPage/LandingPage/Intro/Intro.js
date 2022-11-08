import React from "react";

import styles from "./Intro.module.scss";
import { motion } from "framer-motion";
import { useContextProvider } from "../../../../components/ContextProvider/Provider";

export default function Intro() {
  const { isDarkTheme } = useContextProvider();

  const intro = [
    "Currently working at Total Performance Data as a Full Stack Developer.",
    "Owner and Full Stack Developer at Devit Digital.",
    "Open for new opportunities.",
    "Looking for a new challenge.",
  ];

  const techList = [
    "JavaScript",
    "TypeScript",
    "PHP",
    "WordPress",
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
    "HTML",
    "CSS",
    "Sass",
    "Framer Motion",
    "Redux",
    "Context API",
    "REST API",
    "React Testing Library",
    "AWS",
    "Heroku",
    "Netlify",
    "Vercel",
    "Sentry",
    "Google Analytics",
  ];

  return (
    <>
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
        }}
      >
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
                exit={{ opacity: 0 }}
              >
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
            exit={{ opacity: 0 }}
          >
            {techList.map((item, key) => {
              return (
                <motion.span
                  key={key}
                  initial={{
                    opacity: 0,
                    y: key,
                    // x: key,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    // x: 0,
                    color: isDarkTheme
                      ? "rgb(242, 163, 101)"
                      : "rgb(158, 77, 13)",
                    border: isDarkTheme
                      ? "1px solid rgb(242, 163, 101)"
                      : "1px solid rgb(158, 77, 13)",
                    transition: {
                      delay: 2 + key / 10,
                      duration: 0.75,
                      type: "tween",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: key,
                    x: key,
                  }}
                >
                  {item}
                </motion.span>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
