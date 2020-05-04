import React from 'react';
import { TextField } from 'office-ui-fabric-react';
// import SearchResults from './SearchResults';

export interface ISearchProps {
    onCitySelect: (id: number) => void;
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

    private onInputChange(text: string | undefined) {
        this.setState({
            searchText: text
        });
    }

    public render(): React.ReactElement<ISearchProps> {
        const { searchText } = this.state;
        return <React.Fragment>
            <TextField
                onChange={(ev, val) => { debugger; this.onInputChange(val); }}
                value={searchText}
            />
            {/* <SearchResults searchText={searchText} onCitySelect={this.props.onCitySelect} /> */}
        </React.Fragment>
    }
}