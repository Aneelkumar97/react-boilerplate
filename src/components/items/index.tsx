import React from 'react';
import { IRestaurant } from './../../concerns/Restaurant';
import styles from './styles.module.scss';
import { Item } from './Item';

export const Items: React.SFC<{ restaurants: IRestaurant[], onItemClick: (index: number) => void }> = (props) => {
    return <div className={`${styles.items}`}>
        {props.restaurants.map((game, index) =>
            <Item
                onItemClick={props.onItemClick}
                index={index}
                item={game}
                key={index}
            />
        )}
    </div>;
};