"use client";
import Image from "next/image";
import styles from "./SearchButton.module.scss";
import loupe from "../../../../public/svg/search.svg";
const SearchButton = () => {
  return (
    <button className={styles.searchButton}>
      <Image src={loupe} alt="Иконка лупы для поиска по сайту" />
      <span className={styles.text}>Поиск по сайту</span>
    </button>
  );
};

export default SearchButton;
