import React from 'react';
import styles from './styles.module.scss';
import { IGame } from './../../concerns/Game';

export const ItemDetails: React.SFC<{ game: IGame }> = (props) => {
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