import styles from './Social.module.scss';

// import { useContextProvider } from '../../../../components/ContextProvider/Provider';

import Profile from './Profile/Profile';
import GitHub from './GitHub/GitHub';
import LinkedIn from './LinkedIn/LinkedIn';

export default function SocialIcons() {
    // const { isDarkTheme } = useContextProvider();

    return (
        <div className={styles.Social}>
            <Profile />
            <GitHub />
            <LinkedIn />
        </div>
    );
}
