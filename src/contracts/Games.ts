import { IGame } from "../concerns/Game";

export interface IGamesContract {
    get: () => Promise<IGame[]>;
}