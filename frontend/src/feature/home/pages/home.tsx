import styles from "./home.module.css";

import HeroBanner from "../components/heroBanner/heroBanner";
import Step from "../components/step/step";
import Example from "../components/example/example";

const Home = () => {
  return (
    <section className={styles.home}>
      <HeroBanner />
      <Example/>
      <Step/>
    </section>
  );
};

export default Home;
