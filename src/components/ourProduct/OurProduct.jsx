import React from 'react'
import { OurData } from "../../model/OurData";
import OutProductItem from './OutProductItem';
import styles from "./OurProduct.module.css"
import arrow from "../../assets/img/arrow.png";
const OurProduct = () => {
    return (
        <div id="our">
            <div className={styles['content-section-our']} >
                <div className={styles['our-heading']} >Our Products</div>
                <div className={styles['section-product']} >
                    <ul id={styles['nav-our']} >
                        <li><a className={styles['section-top']}  href="#top">Top</a></li>
                        <li><a href="#bottom">Bottom</a></li>
                        <li><a href="#dress">Dress</a></li>
                        <li><a href="#set">Set</a></li>
                        <li><a href="#knit">Knit</a></li>
                        <li><a href="#outer">Outer</a></li>
                    </ul>
                </div>
                <div className={styles['our-product']} >
                <div className={styles['our-product-all']} >
                    {OurData.map((item, index) => (
                        <OutProductItem
                            key={index}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            button={item.button}
                            nameButton={item.nameButton}
                        ></OutProductItem>
                    ))}
                </div>
                <div className={styles['btn-our']} >
                        <button className={styles['btn-see-more']} >SEE MORE<img className={styles['icon-arrow']} 
                        src={arrow} alt={styles['Icon']} /></button>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default OurProduct