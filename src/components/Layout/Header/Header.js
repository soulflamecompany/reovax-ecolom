import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import logo from "../../../../public/svg/logo.svg";
import SearchButton from "@/components/client/SearchButton/SearchButton";
import wasap from "../../../../public/svg/wasapp.svg";
import tg from "../../../../public/svg/tg.svg";
import viber from "../../../../public/svg/viber.svg";

const icons = [
  { src: wasap, alt: "WhatsApp", href: "https://web.whatsapp.com/" },
  { src: tg, alt: "Telegram", href: " https://web.telegram.org/" },
  {
    src: viber,
    alt: "Viber",
    href: "https://www.viber.com/ru/",
  },
];

const headerLinks = [
  { href: "#", label: "ЛОТЕРЕЯ" },
  { href: "#", label: "МЕТАЛЛОЛОМ" },
  { href: "#", label: "УСЛУГИ" },
  { href: "#", label: "ЦЕНЫ" },
  { href: "#", label: "ПУНКТЫ ПРИЁМА" },
  { href: "#", label: "О КОМПАНИИ" },
  { href: "#", label: "КОНТАКТЫ" },
];

const Header = () => {
  return (
    <header className={styles.container}>
      <section className={styles.mainContent}>
        <div className={styles.logoWrapper}>
          <Link href="/" aria-label="На главную" className={styles.logo}>
            <Image src={logo} alt="Логотип ЭКОЛОМ" priority />
          </Link>
          <p className={styles.logoText}>Ежедневно с 9:00 до 21:00</p>
        </div>

        <div className={styles.searchWrapper}>
          <SearchButton />
        </div>

        <Link href="#" className={styles.linkCalc}>
          Калькулятор
        </Link>
        <nav className={styles.contactsWrapper} aria-label="Контакты">
          <div className={styles.socmediaWrapper} aria-label="Социальные сети">
            {icons.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={styles.iconWrapper}
                aria-label={item.alt}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.iconBg}>
                  <Image src={item.src} alt={item.alt} />
                </div>
              </Link>
            ))}
          </div>

          <address className={styles.addressWrapper}>
            <Link href="tel:+78129268833" className={styles.addressTel}>
              +7 (812) 926-88-33
            </Link>
            <Link href="mailto:info@eco-lom.ru" className={styles.addressMail}>
              info@eco-lom.ru
            </Link>
          </address>

          <Link href="#" className={styles.linkCall}>
            Перезвоните мне
          </Link>
        </nav>
      </section>
      <div className={styles.border} />
      <section className={styles.secondaryContent}>
        {headerLinks.map((link, index) => (
          <Link key={index} href={link.href} className={styles.headerLinks}>
            {link.label}
          </Link>
        ))}
      </section>
    </header>
  );
};

export default Header;
