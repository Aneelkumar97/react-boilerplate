import React from 'react';
import { IGame } from './../../concerns/Game';
import styles from './styles.module.scss';
import { Item } from './Item';

export const Items: React.SFC<{ games: IGame[], onItemClick: (index: number) => void }> = (props) => {
    return <div className={`${styles.items}`}>
        {props.games.map((game, index) =>
            <Item
                onItemClick={props.onItemClick}
                index={index}
                item={game}
                key={index}
            />
        )}
    </div>;
};