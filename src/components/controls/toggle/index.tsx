import * as React from 'react';
import styles from './styles.module.scss';

export interface IToggleProps {
    disabled?: boolean;
    label?: string;
    checked: boolean;
    containerClassName?: string;
    onToggle: (checked: boolean) => void;
}

export interface IToggleState {
}

export default class Toggle extends React.Component<IToggleProps, IToggleState> {
    public render(): React.ReactElement<IToggleProps> {
        const { checked, onToggle, label, containerClassName } = this.props;
        return <div className={`${styles.toggle} ${containerClassName}`} title={label}>
            <input
                checked={checked}
                type="checkbox"
                id="checkbox"
            />
            <div className={`${styles.slider} ${styles.round}`}
                onClick={() => onToggle(!checked)}
            />
        </div>;
    }
}