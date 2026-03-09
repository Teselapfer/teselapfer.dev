import { Link } from "react-router";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import github from "../assets/sns_github.svg";
import instagram from "../assets/sns_instagram.svg";
import twitter from "../assets/sns_twitter.svg";
import youtube from "../assets/sns_youtube.svg";
import dark from "../assets/mode_moon.svg";
import light from "../assets/mode_sun.svg";
import monitor from "../assets/mode_monitor.svg";
import styles from "./footer.module.css";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
          <div className={styles.toggleTrack}>
            <button
              className={`${styles.toggleButton} ${theme === "light" ? styles.active : ""}`}
              onClick={() => setTheme("light")}
            >
              <img src={light} alt="light" className={styles.themeIcon} />
            </button>
            <button
              className={`${styles.toggleButton} ${theme === "dark" ? styles.active : ""}`}
              onClick={() => setTheme("dark")}
            >
              <img src={dark} alt="dark" className={styles.themeIcon} />
            </button>
          </div>

          <button
            className={`${styles.systemButton} ${theme === "system" ? styles.active : ""}`}
            onClick={() => setTheme("system")}
          >
            <img src={monitor} alt="system" className={styles.themeIcon} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
