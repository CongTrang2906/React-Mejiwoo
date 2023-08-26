import React from "react";
import styles from "./Contact.module.css";
import facebook from "../../assets/img/facebook.png";
import ig from "../../assets/img/ig.png";
import twt from "../../assets/img/twt.png";
import yt from "../../assets/img/yt.png";
const Contact = () => {
  return (
    <div className={styles["content-contact-info"]}>
      <div className={styles["contact-info-all"]}>
        <div className={styles["contact-info-webside"]}>
          <div className={styles["about-contact-info"]}>
            <div className={styles["webside-name"]}>
              <div className={styles["title-contact"]}>
                <p className={styles["title-contact-webside"]}>MEJIWOO</p>
                <p className={styles["title-contact-webside-kr"]}>미지우</p>
              </div>
            </div>
            <div className={styles["about-us"]}>
              <div className={styles["title-about-us"]}>
                <p className={styles["title-contact-about-us"]}>About Us</p>
                <p className={styles["title-contact-news"]}>News</p>
                <p className={styles["title-contact-official"]}>
                  Official Store
                </p>
                <p className={styles["title-contact-company"]}>Company</p>
                <p className={styles["title-contact-careers"]}>Careers</p>
              </div>
            </div>
            <div className={styles["get-help"]}>
              <div className={styles["title-contact-get-help-all"]}>
                <p className={styles["title-contact-get-help"]}>Get Help</p>
                <p className={styles["title-contact-faq"]}>FAQ</p>
                <p className={styles["title-contact-shipping"]}>Shipping</p>
                <p className={styles["title-contact-payment"]}>Payment</p>
                <p className={styles["title-contact-returns"]}>Returns</p>
                <p className={styles["title-contact-contact-us"]}>Contact Us</p>
              </div>
            </div>
          </div>
          <div className={styles["about-follow-us"]}>
            <div className={styles["follow-us"]}>
              <div className={styles["title-contact-follow-us"]}>
                <p className={styles["title-contact-follow-us"]}>Follow Us</p>
                <div className={styles["image-contact"]}>
                  <img
                    src={facebook}
                    alt=""
                    className={styles["icon-contact"]}
                  />
                  <img src={ig} alt="" className={styles["icon-contact"]} />
                  <img src={twt} alt="" className={styles["icon-contact"]} />
                  <img src={yt} alt="" className={styles["icon-contact"]} />
                </div>
              </div>
            </div>
            <div className={styles["general-info"]}>
              <div className={styles["terms-conditions-privacy"]}>
                <p className={styles["title-contact-guide"]}>Guide</p>
                <p className={styles["title-contact-terms"]}>
                  Terms & Conditions
                </p>
                <p className={styles["title-contact-privacy"]}>
                  Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
