import React from 'react';
import styles from './styles.module.scss';
// import { Shimmer, mergeStyles, Fabric } from 'office-ui-fabric-react';

const Loading: React.FC = () => {
    return (<div className={`${styles.loading}`}>
        <div className={`${styles.box}`}>
            {`Loading...`}
        </div>
    </div>
    );
}

export default Loading;