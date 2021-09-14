import styles from './Social.module.scss';
import ReactTooltip from 'react-tooltip';

import { useContextProvider } from '../../../../components/ContextProvider/Provider';

import Profile from './Profile/Profile';
import SendMail from './SendMail/SendMail';
import GitHub from './GitHub/GitHub';
import LinkedIn from './LinkedIn/LinkedIn';

export default function SocialIcons() {
  const { isDarkTheme } = useContextProvider();

  return (
    <div className={styles.Social}>
      <a href data-tip="Resume">
        <Profile />
      </a>
      <a href data-tip="E-Mail Me">
        <SendMail />
      </a>
      <a href data-tip="GitHub">
        <GitHub />
      </a>
      <a href data-tip="LinkedIn">
        <LinkedIn />
      </a>

      <ReactTooltip
        place="bottom"
        type="info"
        effect="solid"
        textColor={isDarkTheme ? 'rgb(34, 40, 49)' : 'rgb(242, 163, 101)'}
        backgroundColor={isDarkTheme ? 'rgb(242, 163, 101)' : 'rgb(34, 40, 49)'}
      />
    </div>
  );
}
