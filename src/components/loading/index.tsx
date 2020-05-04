import React from 'react';
// import styles from './styles.module.scss';
import { Shimmer, mergeStyles, Fabric } from 'office-ui-fabric-react';

const wrapperClass = mergeStyles({
    padding: 2,
    selectors: {
        '& > .ms-Shimmer-container': {
            margin: '10px 0'
        }
    }
});

const Loading: React.FC = () => {
    return (<Fabric className={wrapperClass}>
        <Shimmer />
        <Shimmer width="75%" />
        <Shimmer width="50%" />
    </Fabric>
    );
}

export default Loading;