import React from 'react';
import styles from './Nav.module.scss';
import { Link } from 'react-router-dom';
import { useContextProvider } from '../../../../components/ContextProvider/Provider';

export default function Nav() {
  const { isDarkTheme } = useContextProvider();

  return (
    <div className={styles.Nav}>
      {/* <div className={styles.Logo}>KK</div> */}

      <div className={styles.Links}>
        {/* <Link
          to="/"
          className={isDarkTheme ? styles.DarkLink : styles.WhiteLink}>
          Home
        </Link>
        <Link
          to="/about"
          className={isDarkTheme ? styles.DarkLink : styles.WhiteLink}>
          About
        </Link>
        <Link
          to="/projects"
          className={isDarkTheme ? styles.DarkLink : styles.WhiteLink}>
          Projects
        </Link> */}
      </div>
    </div>
  );
}
