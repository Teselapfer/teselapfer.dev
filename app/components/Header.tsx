import { NavLink } from "react-router";
import styles from "./header.module.css";

const headerItems = [
  { name: "Profile", path: "/profile" },
  { name: "Blog", path: "/blog" },
  { name: "Feature", path: "/feature" },
];

const Header = () => {
  return (
    <>
      <div className={styles.headerRoot}>
        <div className={styles.navTitle}>
          <NavLink to={"/"}>Top</NavLink>
        </div>
        <div className={styles.navItems}>
          {headerItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={styles.navItem}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
