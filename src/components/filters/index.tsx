import * as React from 'react';
import styles from './styles.module.scss';
import { IFilterField } from '../../concerns/FilterField';

export interface IFiltersProps {
    filters: IFilterField[];
}

export interface IFiltersState {
}

export default class Filters extends React.Component<IFiltersProps, IFiltersState> {
    public render(): React.ReactElement<IFiltersProps> {
        return <div />;
    }
}