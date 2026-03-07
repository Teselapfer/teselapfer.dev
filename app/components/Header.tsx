import { NavLink } from "react-router";
import styles from "./header.module.css";

const headerItems = [
  { name: "Profile", path: "/profile" },
  { name: "Blog", path: "/blog" },
  { name: "Photo", path: "/photo" },
  { name: "Feature", path: "/feature" },
];

const Header = () => {
  return (
    <>
      <div className={styles.headerRoot}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
          }
        >
          Top
        </NavLink>
        <div className={styles.navItems}>
          {headerItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
