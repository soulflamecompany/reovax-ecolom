"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Options.module.scss";

const Options = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.optionsButtonsWrapper}>
      <div className={styles.optionsButtons}>
        {["Цены на сегодня", "Как сдать металл", "Отзывы", "Акции"].map(
          (option) => (
            <button
              key={option}
              className={`${styles.optionBtn} ${
                selectedOption === option ? styles.active : ""
              }`}
              onClick={() => handleOptionClick(option)}
              type="button"
            >
              {option}
            </button>
          )
        )}
      </div>
      <Link href="#" className={styles.mainBtn}>
        Оставить заявку
      </Link>
    </div>
  );
};

export default Options;
