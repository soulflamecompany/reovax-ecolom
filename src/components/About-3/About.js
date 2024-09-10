import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>Комплексный сервис</h3>

        <ul className={styles.stepsList}>
          <li className={styles.stepsItem}>
            Компания «ЭКОЛОМ» — ваш надежный партнер по переработке металлолома
            <br />в Санкт-Петербурге. Мы стремимся к экологической
            ответственности, предлагая выгодные условия и профессиональный
            сервис на всех этапах работы. Гарантируем честность, прозрачность и
            высокие цены на металлолом!
          </li>
          <li className={styles.stepsItem}>
            Помимо переработки лома, наша компания предлагает комплексные
            услуги, включая оценку состава металлов, вывоз и демонтаж. Мы
            осуществляем демонтаж любой сложности – <br /> от кораблей и зданий
            до железнодорожных составов и путей. Наши опытные специалисты <br />
            и собственный автопарк обеспечивают оперативность и надежность в
            выполнении задач.
          </li>
          <li className={styles.stepsItem}>
            Вместе с компанией «ЭКОЛОМ» вы получаете не только надежного
            партнера по переработке металлолома, но и комплексный сервис
            высочайшего уровня. Мы с удовольствием берем <br /> на себя все
            этапы работы — от приёмки до вывоза и демонтажа.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
