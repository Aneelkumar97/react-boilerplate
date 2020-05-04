import React from 'react';
import styles from './styles.module.scss';
import { IGamesContract } from '../../contracts/Games';
import { IGame } from '../../concerns/Game';
import { GamesProvider } from '../../providers/Games';
import Loading from '../loading';
import { Items } from '../items';
import { ItemDetails } from '../itemDetails';

interface IAppProps {
}

interface IAppState {
    isLoading: boolean;
    games: IGame[];
    selectedIndex: number;
}

export default class App extends React.Component<IAppProps, IAppState> {
    private gamesProvider: IGamesContract;
    public constructor(props: IAppProps) {
        super(props);
        this.state = {
            selectedIndex: -1,
            isLoading: true,
            games: []
        };
        this.gamesProvider = new GamesProvider();
        this.onItemClick = this.onItemClick.bind(this);
    }

    private onItemClick(index: number) {
        this.setState({
            selectedIndex: index
        });
    }

    public componentDidMount() {
        this.gamesProvider.get().then((games) => {
            this.setState({
                games,
                isLoading: false
            });
        });
    }

    public render(): React.ReactElement<IAppProps> {
        const { games } = this.state;
        return <div className={`${styles.app}`}>
            <header className={`${styles.header}`}>
                <span className={`${styles.heading}`}>{`Games`}</span>
            </header>
            {this.state.isLoading ? <Loading /> : <div className={`${styles.container}`}>
                <div className={`${styles.content}`}>
                    <Items
                        games={games}
                        onItemClick={this.onItemClick}
                    />
                </div>
            </div>}
        </div>;
    }
}