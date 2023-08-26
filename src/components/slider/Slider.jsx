import React from 'react'
import styles from "./Slider.module.css"
const Slider = () => {
  return (
    <div className={styles['slider']}>
        <div className={styles['text-content']}>
            <h2 className={styles['text-heading']}>MEJIWOO</h2>
            <h3 className= {styles['text-heading-one']}>미지우</h3>
            <div className= {styles['text-description']}>make your everyday look prettier with MEJIWOO Korean Made
            </div>
        </div>
    </div>
  )
}

export default Slider