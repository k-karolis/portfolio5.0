import styles from '../Social.module.scss';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { useContextProvider } from '../../../../../components/ContextProvider/Provider';

export default function Profile() {
  const { isDarkTheme } = useContextProvider();

  const icons = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {},
  };
  return (
    <div>
      <a
        href="https://karoliskimtys.notion.site/KAROLIS-KIMTYS-3a9bda1f40db4d66b53bc9958e70276a"
        target="_blank"
        rel="noopener noreferrer">
        <motion.div
          className={styles.Profile}
          key={uuidv4()}
          variants={icons}
          initial="hidden"
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0,
              duration: 0.5,
              type: 'tween',
            },
          }}
          exit="hidden"
          whileTap={{ scale: 1.2 }}
          whileHover={{ y: -1 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45.532px"
            height="45.532px"
            viewBox="0 0 45.532 45.532">
            <path
              fill={isDarkTheme ? 'rgb(236, 236, 236)' : 'rgb(158, 77, 13)'}
              d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765
              S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53
              c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012
              c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592
              c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"
            />
          </svg>
        </motion.div>
      </a>

      {/* <motion.div
          className={styles.Selfie}
          layout
          variants={selfieVariant}
          initial="hidden"
          animate={{
            fill: isDarkTheme ? 'rgb(242, 163, 101)' : 'rgb(158, 77, 13)',
            opacity: 1,

            transition: {
              duration: 1,

              delay: 0.1,
              type: 'tween',
            },
          }}
          exit="hidden"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}>
          <SelfieIcon />
        </motion.div> */}
    </div>
  );
}
