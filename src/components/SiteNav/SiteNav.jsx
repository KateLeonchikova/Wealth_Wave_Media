import styles from "./SiteNav.module.css";
import { Logo } from "./Logo/Logo";
import { Nav } from "./Nav/Nav";
import myIcon from "../../assets/image/icon.svg";

export const SiteNav = () => {
  return (
    <div className={styles.siteNav__container}>
      <Logo />
      <Nav />
      <img src={myIcon} className={styles.siteNav__img} alt="My Icon" />
    </div>
  );
};
