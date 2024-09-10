import Options from "../client/HeroOptions/Options";
import styles from "./Hero.module.scss";
import Image from "next/image";
import heroImg from "../../../public/hero.jpg";
import playBtn from "../../../public/svg/playBtn.svg";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            Приём лома чёрных и цветных металлов
            <span className={styles.bold}>в Санкт-Петербурге</span>
          </h1>

          <div>
            <Options />
          </div>
        </div>
        <article className={styles.contentMedia}>
          <div className={styles.videoWrapper}>
            <svg className={styles.circleSvg} viewBox="0 0 200 200">
              <defs>
                <path
                  id="circlePathTop"
                  d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
                />
                <path
                  id="circlePathBottom"
                  d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
                  transform="rotate(180, 100, 100)"
                />
              </defs>
              <text className={styles.text}>
                <textPath
                  href="#circlePathTop"
                  startOffset="50%"
                  textAnchor="top"
                >
                  Видео о компании «ЭКОЛОМ»
                </textPath>
              </text>
              <text className={styles.text}>
                <textPath
                  href="#circlePathBottom"
                  startOffset="50%"
                  textAnchor="bottom"
                >
                  Видео о компании «ЭКОЛОМ»
                </textPath>
              </text>
            </svg>
            <button className={styles.playButton}>
              <Image src={playBtn} alt="Кнопка включения видео про компанию" />
            </button>
          </div>

          <div className={styles.imageWrapper}>
            <svg
              className={styles.imageBg}
              width="838"
              height="689"
              viewBox="0 0 838 689"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 345.007C0 216.832 33.3604 97.9428 90.2976 0H838V689H89.709C33.1306 591.251 0 472.74 0 345.007Z"
                fill="#C6D7CA"
              />
            </svg>

            <svg
              className={styles.imageClip}
              width="838"
              height="689"
              viewBox="0 0 838 689"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="clipPath">
                  <path d="M0 345.007C0 216.832 33.3604 97.9428 90.2976 0H838V689H89.709C33.1306 591.251 0 472.74 0 345.007Z" />
                </clipPath>
              </defs>

              <image
                href={heroImg.src}
                clipPath="url(#clipPath)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
