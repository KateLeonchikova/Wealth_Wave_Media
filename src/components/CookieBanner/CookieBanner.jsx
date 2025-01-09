import styles from "./CookieBanner.module.css";
import { SwitchToggle } from "../SwitchToggle/SwitchToggle";
import { useState } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

export const CookieBanner = ({ onAccept, onDecline }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    functional: false,
    analytical: false,
  });

  const handleAcceptCookie = () => {
    const newPreferences = { functional: true, analytical: true };
    setCookiePreferences(newPreferences);

    Cookies.set("cookieConsent", JSON.stringify(newPreferences), {
      expires: 365,
    });

    onAccept();
  };

  const handleDeclineCookie = () => {
    Cookies.remove("cookieConsent");
    onDecline();
  };

  const handleSettingsClick = () => {
    setIsSettingsOpen(true);
  };

  const handleToggleChange = (key, value) => {
    setCookiePreferences((prev) => ({ ...prev, [key]: value }));
  };

  const handleSaveSettings = () => {
    if (!cookiePreferences.functional && !cookiePreferences.analytical) {
      Cookies.remove("cookieConsent");
      onDecline();
      return;
    }

    Cookies.set("cookieConsent", JSON.stringify(cookiePreferences), {
      expires: 365,
    });

    onAccept();
  };

  return (
    <div className={styles.cookie}>
      <div className={styles.cookie__container}>
        <div className="container">
          {!isSettingsOpen ? (
            <div className={styles.cookie__content}>
              <h2 className={styles.cookie__title}>Cookie preferences</h2>
              <p className={styles.cookie__text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                distinctio recusandae dolorum quae veniam cumque perferendis
                vero magnam repellat, adipisci earum delectus, placeat, eveniet
                accusamus dolore ipsa soluta. Obcaecati, omnis.
              </p>
              <p className={styles.cookie__text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                rem at, velit nihil vitae tempore repellat a labore ratione
                iusto harum earum adipisci ducimus beatae quo voluptas quasi
                saepe et.
              </p>
              <div className={styles.cookie__buttons}>
                <button
                  className={`${styles.cookie__btn} ${styles.cookie__btn_settings}`}
                  onClick={handleSettingsClick}
                >
                  Settings
                </button>
                <button
                  className={`${styles.cookie__btn} ${styles.cookie__btn_accept}`}
                  onClick={handleAcceptCookie}
                >
                  Accept
                </button>
                <button
                  className={`${styles.cookie__btn} ${styles.cookie__btn_decline}`}
                  onClick={handleDeclineCookie}
                >
                  Decline
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.cookie__content}>
              <h2 className={styles.cookie__title}>COOKIE SETTINGS</h2>
              <p className={styles.cookie__text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                nemo ut ipsum inventore nihil, optio mollitia eum eaque alias
                incidunt modi voluptas, porro hic quisquam temporibus ducimus
                recusandae ratione nostrum!
              </p>
              <div className={styles.cookie__settings}>
                <div className={styles.cookie__settings_wrapper}>
                  <h3 className={styles.cookie__title}>Functional</h3>
                  <p className={styles.cookie__text}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Corrupti perferendis ullam, omnis deserunt ex, deleniti
                    illum architecto aspernatur tenetur, eos blanditiis. Unde
                    non iure accusamus maiores nesciunt voluptatem ad atque?
                  </p>
                </div>
                <div className={styles.cookie__switch}>
                  <SwitchToggle
                    onChange={(value) =>
                      handleToggleChange("functional", value)
                    }
                  />
                </div>
              </div>
              <span className={styles.cookie__border}></span>
              <div className={styles.cookie__settings}>
                <div className={styles.cookie__settings_wrapper}>
                  <h3 className={styles.cookie__title}>Analytical</h3>
                  <p className={styles.cookie__text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa iusto ex omnis deserunt. Veniam, nemo perspiciatis
                    incidunt ut voluptates velit quas in fuga aliquam atque,
                    laboriosam odit commodi officiis nihil.
                  </p>
                </div>
                <div className={styles.cookie__switch}>
                  <SwitchToggle
                    onChange={(value) =>
                      handleToggleChange("analytical", value)
                    }
                  />
                </div>
              </div>
              <button
                onClick={handleSaveSettings}
                className={`${styles.cookie__btn} ${styles.cookie__btn_accept}`}
              >
                Save settings
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

CookieBanner.propTypes = {
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
};
