import styles from "./style.module.css";

import { NavbarTop } from "./navbar-top/NavbarTop";
import { NavbarBottom } from "./navbar-bottom/NavbarBottom";
import { NavbarMobile } from "./navbar-mobile/NavbarMobile";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <NavbarTop />
      <NavbarBottom />
      <NavbarMobile />
    </header>
  );
};
