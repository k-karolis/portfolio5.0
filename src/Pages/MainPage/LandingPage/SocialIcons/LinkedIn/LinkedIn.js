import styles from '../Social.module.scss';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { useContextProvider } from '../../../../../components/ContextProvider/Provider';

const icons = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {},
};

export default function LinkedIn() {
  const { isDarkTheme } = useContextProvider();

  return (
    <div>
      <a
        href="https://www.linkedin.com/in/karolis-kimtys/"
        target="_blank"
        rel="noopener noreferrer">
        <motion.div
          className={styles.LinkedIn}
          key={uuidv4()}
          variants={icons}
          initial="hidden"
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.6,
              duration: 0.5,
              type: 'tween',
            },
          }}
          exit="hidden"
          whileTap={{ scale: 1.2 }}
          whileHover={{ y: -1 }}>
          <svg
            height="512pt"
            viewBox="0 0 512 512"
            width="512pt"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill={isDarkTheme ? 'rgb(236, 236, 236)' : 'rgb(158, 77, 13)'}
              d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"
            />
          </svg>
        </motion.div>
      </a>
    </div>
  );
}
