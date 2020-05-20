import React from 'react';
import styles from './styles.module.scss';

export interface ISearchProps {
    onSearch: (text: string) => void;
}

export interface ISearchState {
    searchText: string | undefined;
}

export default class Search extends React.Component<ISearchProps, ISearchState> {
    constructor(props: ISearchProps) {
        super(props);
        this.state = {
            searchText: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    private onInputChange(text: string) {
        this.setState({
            searchText: text
        });
        this.props.onSearch(text);
    }

    public render(): React.ReactElement<ISearchProps> {
        const { searchText } = this.state;
        return <div
            className={`${styles.search}`}
        >
            <input
                placeholder={`Search`}
                type={"text"}
                onChange={(ev) => {
                    this.onInputChange(ev.currentTarget.value);
                }}
                value={searchText}
            />
        </div>;
    }
}