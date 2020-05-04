export interface IHttpContract {
    get: (url: string) => Promise<any>;
}