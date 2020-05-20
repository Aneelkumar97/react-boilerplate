import * as React from 'react';
import styles from './styles.module.scss';
import { IColor } from './Model';

export interface IColorPickerProps {
    colors: IColor[];
    selectedColor: IColor;
    onChange: (color: IColor) => void;
}

export interface IColorPickerState {
}

export default class ColorPicker extends React.Component<IColorPickerProps, IColorPickerState> {
    public render(): React.ReactElement<IColorPickerProps> {
        return <div className={`${styles.colorPicker}`}>
            <select
                style={{
                    backgroundColor: this.props.selectedColor ? this.props.selectedColor.value : '#000'
                }}
                onChange={(ev) => {
                    let option = this.props.colors.filter(color => color.label == ev.currentTarget.value)[0];
                    this.props.onChange(option);
                }}>
                {this.props.colors.map((color) => {
                    return <option className={`${styles.option}`}
                        style={{
                            backgroundColor: color.value
                        }}
                        value={color.label}
                    >
                    </option>;
                })}
            </select>
        </div>;
    }
}