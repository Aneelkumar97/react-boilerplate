import { IHttpContract } from "../contracts/Http";
import { IRestaurantsContract } from "../contracts/Restaurants";
import { IRestaurant } from "../concerns/Restaurant";
import { HttpProvider } from "./Http";

export class RestaurantsProvider implements IRestaurantsContract {
    private http: IHttpContract;
    private dataUrl: string;
    constructor() {
        this.http = new HttpProvider();
        this.dataUrl = "/react-boilerplate/static/media/Data.23b62444.csv";
    }

    public get(): Promise<IRestaurant[]> {
        return new Promise<IRestaurant[]>((resolve, reject) => {
            this.http.getFile(this.dataUrl).then((data) => {
                let rows: string[] = data.split('\n');
                rows = rows.slice(1, rows.length - 1);
                let restaurants: IRestaurant[] = [];
                rows.map((row: string) => {
                    let columns = row.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
                    let cuisines = columns[2].split(', ');
                    if (cuisines.length > 1) {
                        cuisines[0] = cuisines[0].slice(1);
                        cuisines[cuisines.length - 1] = cuisines[cuisines.length - 1].slice(0, cuisines[cuisines.length - 1].length - 1);
                    }
                    restaurants.push({
                        id: columns[0],
                        name: columns[1],
                        cuisines: cuisines,
                        averageForTwo: Number(columns[3]),
                        currency: columns[4],
                        hasTableBooking: columns[5] === "Yes",
                        hasOnlineDelivery: columns[6] === "Yes",
                        rating: Number(columns[7]),
                        ratingColor: columns[8],
                        ratingText: columns[9],
                        votes: Number(columns[10]),
                    });
                });
                resolve(restaurants);
            });
        });
    }
}