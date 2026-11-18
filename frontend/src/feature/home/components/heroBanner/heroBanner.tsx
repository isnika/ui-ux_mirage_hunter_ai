import { Link } from "react-router-dom";
import styles from "./heroBanner.module.css";

const HeroBanner = () => {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.content}>
        <h1 id="hero-title" className={styles.title}>
          Phát hiện lỗi mô hình
          <br />
          <span>trước khi phát hành.</span>
        </h1>

        <p className={styles.description}>
          Kiểm thử mô hình phân loại ảnh với các biến đổi như làm mờ,
          thay đổi độ sáng và nén JPEG. Lưu các trường hợp dự đoán sai
          để tái lập và kiểm tra lại.
        </p>

        <div className={styles.actions}>
          <Link className={styles.primaryButton} to="/hunts/new">
            Demo
          </Link>

          <Link className={styles.secondaryButton} to="/models">
            Tải model
          </Link>
        </div>
      </div>

      <figure className={styles.visual} aria-label="Ví dụ về các phép biến đổi ảnh">
        <div className={`${styles.orbit} ${styles.orbitOuter}`} aria-hidden="true" />
        <div className={`${styles.orbit} ${styles.orbitInner}`} aria-hidden="true" />

        <div className={styles.core} aria-hidden="true">
          <strong>MH</strong>
          <span>ROBUSTNESS LAB</span>
        </div>

        <div className={`${styles.node} ${styles.nodeBrightness}`}>
          <span>Brightness</span>
          <strong>−32%</strong>
        </div>

        <div className={`${styles.node} ${styles.nodeBlur}`}>
          <span>Blur</span>
          <strong>σ 1.8</strong>
        </div>

        <div className={`${styles.node} ${styles.nodeJpeg}`}>
          <span>JPEG</span>
          <strong>Q 12</strong>
        </div>

        <figcaption className={styles.caption}>
          Thông số biến đổi dùng để kiểm thử mô hình
        </figcaption>
      </figure>
    </section>
  );
};

export default HeroBanner;