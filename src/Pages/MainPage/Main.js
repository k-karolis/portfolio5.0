import { BrowserRouter as Router, Switch } from 'react-router-dom';
import styles from './Main.module.scss';
import { useContextProvider } from '../../components/ContextProvider/Provider';

import Nav from './LandingPage/Nav/Nav';
import LandingPage from './LandingPage/LandingPage';
// import About from "./About/About";
// import ProjectsPage from "./ProjectsPage/ProjectsPage";

export default function Main() {
    const { isDarkTheme } = useContextProvider();

    return (
        <div className={isDarkTheme ? styles.DarkMode : styles.LightMode}>
            <Router>
                <div className={styles.Main}>
                    <div className={styles.Nav}>
                        <Nav />
                    </div>

                    <Switch>
                        <LandingPage />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}
