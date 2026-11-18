import {
  IoCubeOutline,
  IoLayersOutline,
  IoStatsChartOutline,
  IoLocateOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

import styles from "./step.module.css";

const steps = [
  {
    number: "01",
    title: "Chọn mô hình",
    description: "Chọn mô hình phân loại ảnh cần kiểm thử.",
    icon: IoCubeOutline,
  },
  {
    number: "02",
    title: "Chọn bộ dữ liệu",
    description: "Tải ảnh và tệp labels.csv chứa nhãn chuẩn.",
    icon: IoLayersOutline,
  },
  {
    number: "03",
    title: "Đánh giá trên ảnh gốc",
    description: "So sánh dự đoán của mô hình với nhãn chuẩn.",
    icon: IoStatsChartOutline,
  },
  {
    number: "04",
    title: "Tạo Hunt",
    description: "Biến đổi ảnh để tìm các trường hợp mô hình dự đoán sai.",
    icon: IoLocateOutline,
  },
  {
    number: "05",
    title: "Xác minh lỗi",
    description: "Chạy lại và lưu lỗi đã xác minh thành ca kiểm thử.",
    icon: IoCheckmarkCircleOutline,
  },
] as const;

const Step = () => {
  return (
    <section className={styles.section} aria-labelledby="steps-title">
      <div className={styles.intro}>
        <h2 id="steps-title" className={styles.title}>
          Quy trình kiểm thử
        </h2>

        <p className={styles.lead}>
          So sánh dự đoán trên ảnh gốc và ảnh đã biến đổi với nhãn chuẩn.
        </p>
      </div>

      <ol className={styles.grid}>
        {steps.map(({ number, title, description, icon: StepIcon }) => (
          <li
            key={number}
            className={
              number === "04"
                ? `${styles.card} ${styles.highlighted}`
                : styles.card
            }
          >
            <div className={styles.cardTop} aria-hidden="true">
              <span className={styles.number}>{number}</span>
              <span className={styles.icon}>
                <StepIcon size={21} />
              </span>
            </div>

            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Step;