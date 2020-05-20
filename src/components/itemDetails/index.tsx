import React from 'react';
import styles from './styles.module.scss';
import { IRestaurant } from './../../concerns/Restaurant';

export const ItemDetails: React.SFC<{ restaurant: IRestaurant }> = (props) => {
    return <div className={`${styles.itemDetails}`}>
        {/* <div className={`${styles.field}`}>
            <div className={`${styles.label}`}>
                {`Brand`}
            </div>
            <div className={`${styles.text}`}>
                {props.game.brand}
            </div>
        </div>
        <div className={`${styles.field}`}>
            <div className={`${styles.label}`}>
                {`Style`}
            </div>
            <div className={`${styles.text}`}>
                {props.game.style}
            </div>
        </div>
        <div className={`${styles.field}`}>
            <div className={`${styles.label}`}>
                {`Variety`}
            </div>
            <div className={`${styles.text}`}>
                {props.game.variety}
            </div>
        </div>
        <div className={`${styles.field}`}>
            <div className={`${styles.label}`}>
                {`Country`}
            </div>
            <div className={`${styles.text}`}>
                {props.game.country}
            </div>
        </div>
        <div className={`${styles.field}`}>
            <div className={`${styles.label}`}>
                {`Stars`}
            </div>
            <div className={`${styles.text}`}>
                {props.game.stars}
            </div>
        </div>
        <div className={`${styles.field}`}>
            <div className={`${styles.label}`}>
                {`Top Ten`}
            </div>
            <div className={`${styles.text}`}>
                {props.game.topTen}
            </div>
        </div> */}
    </div>;
};