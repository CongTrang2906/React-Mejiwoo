import React from "react";
import styles from "./Signup.module.css";
import point from "../../assets/img/point.png";
import fb from "../../assets/img/fb.png";
import gg from "../../assets/img/gg.png";

const Signup = () => {
  return (
    <div className={styles["content-section-singup"]}>
      <div className={styles["signup-product-all"]}>
        <div className={styles["products-signup"]}>
          <div className={styles["signup-infomation"]}>
            <p className={styles["title-signup"]}>
              Get more benefits by Sign Up & Join Mejiwoo Community!
            </p>
            <div className={styles["inf-title-free"]}>
              <img src={point} alt="" className={styles["icon"]} />
              <p>FREE Special Gift to a new member</p>
            </div>
            <div className={styles["inf-title-point"]}>
              <img src={point} alt="" className={styles["icon"]} />
              <p>Get 2x JIWOO Points to purchase items</p>
            </div>

            <div className={styles["inf-title-voucher"]}>
              <img src={point} alt="" className={styles["icon"]} />
              <p>Get special voucher code every month</p>
            </div>
            <div className={styles["inf-title-upto"]}>
              <img src={point} alt="" className={styles["icon"]} />
              <p>Claim Voucher Disc. Up To 50%</p>
            </div>
          </div>
          <div className={styles["input-infomation"]}>
            <div>
              <input
                className={styles["input-name"]}
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div>
              <input
                className={styles["input-adress"]}
                type="text"
                placeholder="Email Adress"
              />
            </div>
            <div>
              <input
                className={styles["input-password"]}
                type="text"
                placeholder="Password"
              />
            </div>
            <div className={styles["input-checkbox"]}>
              <input
                type="checkbox"
                id="vehicle"
                name="vehicle1"
                value="checkbox"
              />
              <label className={styles["inf-label"]} htmlFor="vehicle1">
                {" "}
                I agree to all the Terms and Privacy Policy
              </label>
            </div>
            <div className={styles["btn-signup-all"]}>
              <button className={styles["btn-signup"]}>SIGN UP</button>
            </div>
            <div className={styles["lines"]}>
              <p className={styles["or-with-lines"]}>Or</p>
            </div>
            <div className={styles["btn-signup-google"]}>
              <button className={styles["btn-google"]}>
                <img src={gg} alt="" className={styles["icon-gg"]} />
                SIGN UP WITH GOOGLE
              </button>
            </div>
            <div className={styles["btn-signup-facebook"]}>
              <button className={styles["btn-facebook"]}>
                <img src={fb} alt="" className={styles["icon-fb"]} />
                SIGN UP WITH FACEBOOK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
