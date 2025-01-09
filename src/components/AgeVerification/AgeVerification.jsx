import styles from "./AgeVerification.module.css";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import verificationImg from "../../assets/image/18plus.png";

export const AgeVerification = ({ onVerify }) => {
  const handleVerify = (isVerified) => {
    Cookies.set("isAgeVerified", isVerified.toString(), { expires: 1 });
    onVerify(isVerified);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <h2 className={styles.modal__title}>Тебе больше 18 лет?</h2>
        <img
          className={styles.modal__img}
          src={verificationImg}
          alt="logo 18+"
        />
        <p className={styles.modal__text}>
          Для посещения сайта необходимо, чтобы было больше 18 лет!
        </p>
        <div className={styles.modal__buttons}>
          <button
            className={`${styles.modal__btn} ${styles.modal__btn_yes}`}
            onClick={() => handleVerify(true)}
          >
            Yes
          </button>
          <button
            className={`${styles.modal__btn} ${styles.modal__btn_no}`}
            onClick={() => handleVerify(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

AgeVerification.propTypes = {
  onVerify: PropTypes.func.isRequired,
};
