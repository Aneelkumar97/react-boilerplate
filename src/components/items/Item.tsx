import React from 'react';
import styles from './styles.module.scss';
import { IRestaurant } from './../../concerns/Restaurant';

export const Item: React.SFC<{ item: IRestaurant, index: number, onItemClick: (index: number) => void }> = (props) => {
    const { item, index, onItemClick } = props;
    return <div
        className={`${styles.item}`}
        onClick={() => onItemClick(index)}
    >
        <div
            className={`${styles.previewImage}`}
        />
        <div className={`${styles.detailsWrapper}`}>
            <div className={`${styles.title}`}>
                {item.name}
            </div>
            <div>
                {`${item.cuisines.join(', ')}`}
            </div>
        </div>
    </div>;
};