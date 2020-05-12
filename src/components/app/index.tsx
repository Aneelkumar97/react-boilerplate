import React from 'react';
import styles from './styles.module.scss';
import themeStyles from '../../stylesheets/abstracts/_theme_variables.module.scss';
import { IGamesContract } from '../../contracts/Games';
import { GamesProvider } from '../../providers/Games';
import { IGame } from '../../concerns/Game';
import Loading from '../loading';
import { Items } from '../items';
import Toggle from '../controls/toggle';

interface IAppProps {
}

interface IAppState {
    isLoading: boolean;
    games: IGame[];
    selectedIndex: number;
    isDarkMode: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {
    private gamesProvider: IGamesContract;
    public constructor(props: IAppProps) {
        super(props);
        this.state = {
            selectedIndex: -1,
            isLoading: true,
            games: [],
            isDarkMode: false
        };
        this.gamesProvider = new GamesProvider();
        this.onItemClick = this.onItemClick.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    private toggleTheme(value: boolean) {
        this.setState({
            isDarkMode: value
        });
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
        const { games, isDarkMode } = this.state;
        return <div className={`${isDarkMode ? themeStyles.themeDark : themeStyles.themeLight} ${themeStyles.theme}`}>
            <div className={`${styles.app}`}>
                <header className={`${styles.header}`}>
                    <div className={`${styles.heading}`}>
                        {`Games`}
                    </div>
                    <Toggle
                        containerClassName={styles.toggle}
                        label={`Toggle Dark Mode`}
                        onToggle={this.toggleTheme}
                        checked={isDarkMode}
                    />
                </header>
                {this.state.isLoading ? <Loading /> : <div className={`${styles.container}`}>
                    <div className={`${styles.content}`}>
                        <Items
                            games={games}
                            onItemClick={this.onItemClick}
                        />
                    </div>
                </div>}
            </div>
        </div>;
    }
}