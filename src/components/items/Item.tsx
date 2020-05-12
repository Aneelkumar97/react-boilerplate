import React from 'react';
import styles from './styles.module.scss';
import { IGame } from './../../concerns/Game';

export const Item: React.SFC<{ item: IGame, index: number, onItemClick: (index: number) => void }> = (props) => {
    const { item, index, onItemClick } = props;
    return <div
        className={`${styles.item}`}
        onClick={() => onItemClick(index)}
    >
        <img
            className={`${styles.previewImage}`}
        />
        <div className={`${styles.detailsWrapper}`}>
            {item.title}
        </div>
    </div>;
};