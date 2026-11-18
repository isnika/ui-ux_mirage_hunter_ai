import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandBlock}>
          <Link className={styles.brand} to="/mainLayout">
            <span className={`${styles["brand-shimmer"]} ${styles.logoName}`}>Mirage Hunter</span>{" "}
            <span className={`${styles["brand-shimmer"]} ${styles.logoAccent}`}>AI</span>
          </Link>
          <p> Nền tảng đánh giá độ ổn định và tái lập lỗi của mô hình phân loại ảnh.</p>
        </div>

        <div className={styles.links}>
          <a href="#about">Giới thiệu</a>
          <a href="#contact">Liên hệ</a>
          <a href="#privacy">Chính sách bảo mật</a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Mirage Hunter AI | All rights reserved | By sudoH2T-VN</p>
      </div>
    </footer>
  );
};

export default Footer;
