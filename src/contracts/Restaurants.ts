import { IRestaurant } from "../concerns/Restaurant";

export interface IRestaurantsContract {
    get: () => Promise<IRestaurant[]>;
}