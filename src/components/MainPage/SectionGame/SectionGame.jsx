import styles from "./SectionGame.module.css";
import { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../../Provider/AppContext";
import Cookies from "js-cookie";

export const SectionGame = () => {
  const modalRef = useRef(null);
  const { setIsCookieBannerVisible } = useContext(AppContext);
  const [isGameVisible, setIsGameVisible] = useState(false);

  const openGame = () => {
    const cookieConsent = Cookies.get("cookieConsent");

    if (!cookieConsent) {
      setIsCookieBannerVisible(true);
    }

    setIsGameVisible(true);
  };

  const closeGame = () => {
    setIsGameVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeGame();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className={styles.game}>
      <div className="container">
        <div className={styles.game__container}>
          <h2 className={styles.game__title}>
            Quos, dolorem! Pariatur, perferendis quibusdam!
          </h2>
          <p className={styles.game__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolorum doloremque est, quibusdam odit voluptatibus illum tenetur?
            Neque, placeat! Nam aut perspiciatis placeat quaerat nulla omnis,
            cumque molestias fugit harum.
          </p>
          <button className={styles.game__btn} onClick={openGame}>
            Click me to play
          </button>
        </div>

        {isGameVisible && (
          <div className={styles.modal}>
            <div className={styles.modal__content} ref={modalRef}>
              <button className={styles.modal__close} onClick={closeGame}>
                ✖
              </button>
              <iframe
                src="https://www.crazygames.com/embed/tower-swap"
                style={{ width: "100%", height: "100%" }}
                allow="gamepad *;"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
