import styles from "./page.module.scss";
import Hero from "@/components/Hero-1/Hero";
import Advantages from "@/components/Advantages-2/Advantages";
import About from "@/components/About-3/About";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Advantages />
      <About />
    </main>
  );
}
