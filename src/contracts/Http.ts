export interface IHttpContract {
    getFile: (url: string) => Promise<any>;
    get: (url: string) => Promise<any>;
}