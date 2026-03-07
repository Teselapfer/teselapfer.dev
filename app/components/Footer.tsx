import { Link } from "react-router";
import github from "../assets/sns_github.svg";
import instagram from "../assets/sns_instagram.svg";
import twitter from "../assets/sns_twitter.svg";
import youtube from "../assets/sns_youtube.svg";
import dark from "../assets/mode_moon.svg";
import light from "../assets/mode_sun.svg";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footerRoot}>
        <div className={styles.copyRight}>
          ©2025 Teselapfer All rights reserved.
        </div>
        <div className={styles.snsLinks}>
          <Link to="https://github.com/Teselapfer" className={styles.link}>
            <img src={github} alt="github" />
          </Link>
          <Link to="" className={styles.link}>
            <img src={instagram} alt="instagram" />
          </Link>
          <Link to="https://x.com/teselapfer" className={styles.link}>
            <img src={twitter} alt="twitter" />
          </Link>
          <Link
            to="https://www.youtube.com/@teselapfer_"
            className={styles.link}
          >
            <img src={youtube} alt="youtube" />
          </Link>
        </div>
        <div className={styles.themeWrapper}>
          <div className={styles.changeTheme}>
            <img src={dark} alt="dark-mode" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
