import { BrowserRouter as Router, Switch } from "react-router-dom";
import styles from "./Main.module.scss";
import { useContextProvider } from "../../components/ContextProvider/Provider";
import ThemeToggler from "../../components/ThemeToggler/ThemeToggler";

import Nav from "./LandingPage/Nav/Nav";
import LandingPage from "./LandingPage/LandingPage";
// import About from "./About/About";
// import ProjectsPage from "./ProjectsPage/ProjectsPage";

export default function Main() {
  const { isDarkTheme } = useContextProvider();

  return (
    <div className={isDarkTheme ? styles.DarkMode : styles.LightMode}>
      <Router>
        <div className={styles.Main}>
          <ThemeToggler />
          <div className={styles.Nav}>
            <Nav />
          </div>

          <Switch>
            {/* <Route exact path="/"> */}
            <LandingPage />
            {/* </Route> */}
            {/* <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <ProjectsPage />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}
