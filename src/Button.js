import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, primary, size, onClick }) => {
  // Define a classe do botão com base nas props 'primary' e 'size'
  const className = `${styles.button} ${
    primary ? styles.primary : styles.secondary
  } ${size === "large" ? styles.large : styles.medium}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
