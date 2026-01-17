import { Link } from "react-router";
import styles from "./footer.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.footerRoot}>
        <div className={styles.copyRight}>
          ©2025 Teselapfer All rights reserved.
        </div>
        <div className={styles.snsLink}>
          mail
        </div>
        <div className={styles.changeTheme}>
          dark
        </div>
      </div>
    </>
  );
};

export default Header;
