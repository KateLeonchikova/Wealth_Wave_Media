import styles from "./SwitchToggle.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

export const SwitchToggle = ({ onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    const isOn = event.target.checked;
    setIsChecked(isOn);

    if (onChange) {
      onChange(isOn);
    }
  };

  return (
    <label className={styles.switch}>
      <input
        className={styles.switch__input}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <span className={styles.switch__slider}></span>
    </label>
  );
};

SwitchToggle.propTypes = {
  onChange: PropTypes.func.isRequired,
};
