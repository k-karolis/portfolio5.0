import styles from './Main.module.scss';
import LandingPage from './LandingPage/LandingPage';
// import ProjectsPage from './ProjectsPage/ProjectsPage';
import ThemeToggler from '../../components/ThemeToggler/ThemeToggler';
import { useContextProvider } from '../../components/ContextProvider/Provider';

export default function Main() {
  const { isDarkTheme } = useContextProvider();

  return (
    <div className={isDarkTheme ? styles.DarkMode : styles.LightMode}>
      <div className={styles.Main}>
        <ThemeToggler />
        <LandingPage />
      </div>

      {/* <div className={styles.Projects}>
        <ProjectsPage />
      </div> */}
    </div>
  );
}
