import React from 'react';
import styles from './styles.module.scss';
import themeStyles from '../../stylesheets/abstracts/_theme_variables.module.scss';
import { IRestaurantsContract } from '../../contracts/Restaurants';
import { RestaurantsProvider } from '../../providers/Restaurants';
import { IRestaurant } from '../../concerns/Restaurant';
import Loading from '../loading';
import { Items } from '../items';
import helper from '../../utils/Helper';
import Toggle from '../controls/toggle';
import ColorPicker from '../controls/colorPicker';
import { IColor } from '../controls/colorPicker/Model';
import Search from '../search';

const colors: IColor[] = require('./../../configs/ThemeColors.json');

interface IAppProps {
}

interface IAppState {
    isLoading: boolean;
    restaurants: IRestaurant[];
    selectedIndex: number;
    isDarkMode: boolean;
    selectedColor: IColor;
    searchText: string | null;
}

export default class App extends React.Component<IAppProps, IAppState> {
    private restaurantsProvider: IRestaurantsContract;
    public constructor(props: IAppProps) {
        super(props);
        this.state = {
            selectedIndex: -1,
            isLoading: true,
            restaurants: [],
            isDarkMode: false,
            selectedColor: colors[0],
            searchText: null
        };
        this.restaurantsProvider = new RestaurantsProvider();
        this.onItemClick = this.onItemClick.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.setThemePrimaryColor = this.setThemePrimaryColor.bind(this);
    }

    private onColorChange(color: IColor) {
        this.setState({
            selectedColor: color
        });
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

    private setThemePrimaryColor(ref: any) {
        if (ref) {
            ref.style.setProperty('--theme-primary', this.state.selectedColor.value);
        }
    }

    private onSearch(text: string) {
        this.setState({
            searchText: text
        });
    }

    public componentDidMount() {
        this.restaurantsProvider.get().then((restaurants) => {
            // let filterValues = helper.getFilterValues(restaurants, 'cuisines');
            this.setState({
                restaurants,
                isLoading: false
            });
        });
    }

    public render(): React.ReactElement<IAppProps> {
        const { restaurants, isDarkMode, searchText, isLoading, selectedColor } = this.state;
        let filteredItems = restaurants;
        if (searchText) {
            filteredItems = restaurants.filter(item => item.name.includes(searchText));
        }
        return <div className={`${isDarkMode ? themeStyles.themeDark : themeStyles.themeLight} ${themeStyles.theme}`}>
            <div className={`${styles.app}`}
                ref={(ref) => this.setThemePrimaryColor(ref)}
            >
                <header className={`${styles.header}`}>
                    <div className={`${styles.heading}`}>
                        {`Restaurants`}
                    </div>
                    <ColorPicker
                        colors={colors}
                        selectedColor={selectedColor}
                        onChange={this.onColorChange}
                    />
                    <Toggle
                        containerClassName={styles.toggle}
                        label={`Toggle Dark Mode`}
                        onToggle={this.toggleTheme}
                        checked={isDarkMode}
                    />
                </header>
                {isLoading ? <Loading /> : <div className={`${styles.container}`}>
                    <Search
                        onSearch={this.onSearch}
                    />
                    <div className={`${styles.content}`}>
                        <Items
                            restaurants={filteredItems}
                            onItemClick={this.onItemClick}
                        />
                    </div>
                </div>}
            </div>
        </div>;
    }
}