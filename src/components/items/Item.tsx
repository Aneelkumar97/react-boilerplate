import React from 'react';
import styles from './styles.module.scss';
import { IGame } from './../../concerns/Game';

export const Item: React.SFC<{ item: IGame, index: number, onItemClick: (index: number) => void }> = (props) => {
    return <div
        className={`${styles.item}`}
        onClick={() => props.onItemClick(props.index)}
    >
        <div>
            {props.item.title}
        </div>
    </div>;
};