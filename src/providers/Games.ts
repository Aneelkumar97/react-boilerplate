import { IHttpContract } from "../contracts/Http";
import { IGamesContract } from "../contracts/Games";
import { IGame } from "../concerns/Game";
import { HttpProvider } from "./Http";

export class GamesProvider implements IGamesContract {
    private httpHandler: IHttpContract;
    private baseUrl: string;
    constructor() {
        this.baseUrl = `http://starlord.hackerearth.com/gamesext`;
        this.httpHandler = new HttpProvider();
    }

    public get(): Promise<IGame[]> {
        return new Promise<IGame[]>((resolve, reject) => {
            this.httpHandler.get(this.baseUrl).then((data) => {
                var games: IGame[] = [];
                data.map((item: any): void => {
                    games.push({
                        title: item.title,
                        platform: item.platform,
                        url: item.url,
                        score: item.score,
                        genre: item.genre,
                        editorsChoice: item.editors_choice == "Y",
                        releaseYear: item.release_year,
                    });
                });
                resolve(games);
            });
        });
    }
}