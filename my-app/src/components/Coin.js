import React from 'react';
//styles
import styles from "./Coin.module.css";

const Coin = ({name , image , price , priceChange , symbol , marketCap}) => {
    return (
        <div className={styles.container}>
            <img src={image} alt={name} className={styles.image} />
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>{priceChange.toFixed(2)}</span>
            <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;