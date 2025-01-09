import styles from "./Nav.module.css";
import { useState, useRef, useEffect, useContext } from "react";
import { AppContext } from "../../Provider/AppContext";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAgeVerified } = useContext(AppContext);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={styles.burger__menu} ref={menuRef}>
        <div
          className={`${styles.burger} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link
                className={`${styles.menu__link} ${
                  isAgeVerified ? "" : styles.disabled
                }`}
                to="/"
                onClick={closeMenu}
              >
                Главная страница
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link
                className={`${styles.menu__link} ${
                  isAgeVerified ? "" : styles.disabled
                }`}
                to="/privacy"
                onClick={closeMenu}
              >
                Политика конфиденциальности
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link
              className={`${styles.nav__link} ${
                isAgeVerified ? "" : styles.disabled
              }`}
              to="/"
            >
              Главная страница
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link
              className={`${styles.nav__link} ${
                isAgeVerified ? "" : styles.disabled
              }`}
              to="/privacy"
            >
              Политика конфиденциальности
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
