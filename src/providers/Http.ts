import { IHttpContract } from "../contracts/Http";

export class HttpProvider implements IHttpContract {
    
    private getHeaders(): { [key: string]: string } {
        return {
            'Accept': 'text/json; application/json'
        };
    }

    public get(url: string, headers?: { [key: string]: string }): Promise<any> {
        let requestHeaders = this.getHeaders();
        if (headers) {
            requestHeaders = { ...requestHeaders, ...headers };
        }
        return fetch(url, {
            headers: requestHeaders
        }).then((response) => response.json());
    }
}