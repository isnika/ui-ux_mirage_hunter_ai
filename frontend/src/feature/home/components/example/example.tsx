import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import styles from "./example.module.css";

const imageUrl = `${import.meta.env.BASE_URL}example-dog.jpg`;
const imageSource =
  "https://commons.wikimedia.org/wiki/File:Golden_Retriever_Carlos_ist_m%C3%BCde_(10579517876).jpg";

const examples = [
  {
    title: "Ảnh gốc",
    alt: "Chó Golden Retriever trong ảnh gốc",
    prediction: "Chó",
    blurred: false,
    correct: true,
  },
  {
    title: "Ảnh sau khi làm mờ",
    alt: "Cùng một chú chó Golden Retriever trong ảnh đã làm mờ",
    prediction: "Mèo",
    blurred: true,
    correct: false,
  },
];

const Example = () => {
  return (
    <section className={styles.section} aria-labelledby="example-title">
      <h2 id="example-title" className={styles.title}>
        Mô hình có còn nhận diện đúng khi ảnh thay đổi?
      </h2>

      <p className={styles.description}>
        Mirage Hunter AI so sánh dự đoán trên ảnh gốc và ảnh đã biến đổi với
        nhãn chuẩn. Khi mô hình dự đoán sai, hệ thống lưu thông số biến đổi để
        có thể chạy lại và xác minh lỗi.
      </p>

      <div className={styles.grid}>
        {examples.map(({ title, alt, prediction, blurred, correct }) => {
          const StatusIcon = correct
            ? IoCheckmarkCircleOutline
            : IoCloseCircleOutline;

          return (
            <article className={styles.card} key={title}>
              <div className={styles.imageFrame}>
                <img
                  className={blurred ? styles.blurredImage : styles.image}
                  src={imageUrl}
                  alt={alt}
                  loading="lazy"
                />
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{title}</h3>

                <dl className={styles.details}>
                  <dt>Nhãn chuẩn</dt>
                  <dd>Chó</dd>
                  <dt>Mô hình dự đoán</dt>
                  <dd>{prediction}</dd>
                </dl>

                <p className={`${styles.status} ${correct ? styles.correct : styles.incorrect}`}>
                  <StatusIcon size={18} aria-hidden="true" />
                  {correct ? "Dự đoán đúng" : "Dự đoán sai"}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <p className={styles.note}>
        Ví dụ minh họa · Kết quả dự đoán giả lập
      </p>
      <p className={styles.credit}>
        Ảnh của <a href={imageSource}>Dirk Vorderstraße</a> ·{" "}
        <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a> ·
        {" "}Ảnh thứ hai được làm mờ.
      </p>
    </section>
  );
};

export default Example;