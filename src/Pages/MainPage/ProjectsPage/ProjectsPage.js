import React, { useContext } from "react";
import styles from "./ProjectsPage.module.scss";
import { ThemeMode } from "../../../components/ThemeProvider/ThemeProvider";
import Title from "../../../components/Title/Title";
import Cards from "./Cards/ProjectCard";

export default function ProjectsPage() {
  const { theme } = useContext(ThemeMode);

  return (
    <ThemeMode.Consumer>
      {(context) => (
        <div className={theme ? styles.DarkMode : styles.LightMode}>
          <div className={styles.ProjectsPage}>
            <div className={styles.Title}>
              <Title first="Personal" second="Projects" />
            </div>
            <div className={styles.Cards}>
              <Cards />
            </div>
          </div>
        </div>
      )}
    </ThemeMode.Consumer>
  );
}
