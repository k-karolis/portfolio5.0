import styles from './Main.module.scss';
import LandingPage from './LandingPage/LandingPage';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import { useContextProvider } from '../../components/ContextProvider/Provider';

export default function Main() {
  const { isDarkTheme } = useContextProvider();

  return (
    <div className={isDarkTheme ? styles.DarkMode : styles.LightMode}>
      <div className={styles.Main}>
        <ThemeToggle />
        <LandingPage />
      </div>

      {/* <div className={styles.Projects}>
        <ProjectsPage />
      </div> */}
    </div>
  );
}
