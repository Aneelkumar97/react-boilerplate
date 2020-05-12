import React from 'react';
import styles from './styles.module.scss';

const Loading: React.FC = () => {
    return (<div className={`${styles.loading}`}>
        <div className={`${styles.box}`}>
            {`Loading...`}
        </div>
    </div>
    );
}

export default Loading;