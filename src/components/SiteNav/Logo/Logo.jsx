import styles from "./Logo.module.css";
import logoIcon from "../../../assets/image/logo.svg";

export const Logo = () => {
  return (
    <div className={styles.logo__wrapper}>
      <img className={styles.logo__img} src={logoIcon} alt="My Logo" />
      <p className={styles.logo__text}>Logo</p>
    </div>
  );
};
