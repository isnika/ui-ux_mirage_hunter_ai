import type { FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { IoSettingsSharp } from "react-icons/io5";

import styles from "./header.module.css";

const HOME_PATH = "/mainLayout";

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const keyword = String(new FormData(event.currentTarget).get("q") ?? "").trim();
    const nextParams = new URLSearchParams(searchParams);

    if (keyword) {
      nextParams.set("q", keyword);
    } else {
      nextParams.delete("q");
    }

    setSearchParams(nextParams);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brandBlock}>
          <Link className={styles.brand} to={HOME_PATH} aria-label="Mirage Hunter AI - Trang chủ">
            <span className={`${styles["brand-shimmer"]} ${styles.logoName}`}>Mirage Hunter</span>{" "}
            <span className={`${styles["brand-shimmer"]} ${styles.logoAccent}`}>AI</span>
          </Link>
          <small className={styles.credit}>By sudo H2T-VN</small>
        </div>

        <form className={styles.searchBar} role="search" onSubmit={handleSearch}>
          <input
            key={searchParams.get("q") ?? ""}
            type="search"
            name="q"
            defaultValue={searchParams.get("q") ?? ""}
            placeholder="Tìm kiếm..."
            aria-label="Từ khóa tìm kiếm"
          />
          <button type="submit">Tìm</button>
        </form>

        <div className={styles.actions}>

          <Link className={styles.control} to="/settings" aria-label="Cài đặt">
            <IoSettingsSharp size={20} aria-hidden="true" />
          </Link>

          <Link className={styles.actionButton} to={HOME_PATH}>
            Kiểm thử
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
