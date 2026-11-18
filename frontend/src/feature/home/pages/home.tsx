import styles from "./home.module.css";

import HeroBanner from "../components/heroBanner/heroBanner"

const Home = () => {
  return (
    <section className={styles.home}>
      <HeroBanner />
    </section>
  );
};

export default Home;
