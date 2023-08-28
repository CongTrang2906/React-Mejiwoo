import React from "react";
import styles from "./Header.module.css";
import search from "../../assets/img/search.png";
import shop from "../../assets/img/shop.png";
import user from "../../assets/img/user.png";
const Header = () => {
  return (
    <div className={styles["header-all"]}>
      <ul className={styles["nav"]}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#categories">Categories</a>
        </li>
        <li>
          <a href="#sale">SALE</a>
        </li>
      </ul>

      <div className={styles["title"]}>
        <p className={styles["title-product"]}>MEJIWOO</p>
        <p className={styles["title-product-kr"]}>미지우</p>
      </div>
      <div className={styles["search"]}>
        <div className={styles["search-btn"]}>
          <input type="text" placeholder="Search" />
          <div className={styles["icon-search"]}>
            <img className={styles["icon-title"]} src={search} alt="Icon" />
          </div>
        </div>
        <div className={styles["icon-shop"]}>
          {" "}
          <img className={styles["icon-title"]} src={shop} alt="Icon" />
        </div>
        <div className={styles["icon-user"]}>
          {" "}
          <img className={styles["icon-title"]} src={user} alt="Icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
