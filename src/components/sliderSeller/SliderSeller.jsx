import React from 'react'
import styles from "./SliderSeller.module.css"
const SliderSeller = () => {
  return (
    <div className={styles['slider-seller']}>
    <div className={styles['text-content-seller']}>
        <h2 className={styles['text-heading-seller']}>Get 50% Off</h2>
        <p className={styles['text-description-seller']}>for all new product purchases min. purchase Rp. 350.000</p>
        <button className={styles['btn-shopnow']}>SHOP NOW</button>
    </div>
</div>
  )
}

export default SliderSeller