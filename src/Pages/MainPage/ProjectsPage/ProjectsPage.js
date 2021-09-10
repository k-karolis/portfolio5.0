import React, { useContext } from 'react';
import styles from './ProjectsPage.module.scss';

import Cards from './Cards/ProjectCard';

export default function ProjectsPage() {
  return (
    <div className={'theme' ? styles.DarkMode : styles.LightMode}>
      <div className={styles.ProjectsPage}>
        <div className={styles.Title}></div>
        <div className={styles.Cards}>
          <Cards />
        </div>
      </div>
    </div>
  );
}
