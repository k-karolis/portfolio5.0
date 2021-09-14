import styles from './Social.module.scss';

import Profile from './Profile/Profile';
import SendMail from './SendMail/SendMail';
import GitHub from './GitHub/GitHub';
import LinkedIn from './LinkedIn/LinkedIn';

export default function SocialIcons() {
  return (
    <div className={styles.Social}>
      <Profile />
      <SendMail />
      <GitHub />
      <LinkedIn />
    </div>
  );
}
