import styles from "./Advantages.module.scss";
import Image from "next/image";
import img1 from "../../../public/svg/credit-card.svg";
import img2 from "../../../public/svg/trending-up.svg";
import img3 from "../../../public/svg/truck.svg";

const advantages = [
  {
    src: img1,
    title: "Моментальный расчёт",
    subtitle: "Мгновенная оплата по безналичному расчету на месте приёма",
  },
  {
    src: img2,
    title: "Высокая цена закупки",
    subtitle:
      "Максимальная высокая цена закупки лома на рынке Санкт-Петербурга",
  },
  {
    src: img3,
    title: "Собственный автопарк",
    subtitle: "Свой автопарк, в составе которого более 30 единиц спецтехники",
  },
];

const Advantages = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {advantages.map((item, index) => (
          <article key={index} className={styles.wrapper}>
            <div className={styles.header}>
              <div className={styles.imgWrapper}>
                <Image src={item.src} alt={item.title} />
              </div>
              <h2 className={styles.title}>{item.title}</h2>
            </div>
            <p className={styles.subtitle}>{item.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
