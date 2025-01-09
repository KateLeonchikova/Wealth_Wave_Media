import styles from "./Header.module.css";
import { SiteNav } from "../SiteNav/SiteNav";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__container}>
          <SiteNav />
        </div>
      </div>
    </header>
  );
};
