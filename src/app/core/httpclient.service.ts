import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rootRenderNodes } from '@angular/core/src/view';
import { ApiConfig } from './core.config';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class HttpClientService {
    private apiConfig;
    constructor(private httpClient: HttpClient) {
        this.init();
    }

    init() {
        this.apiConfig = ApiConfig;
    }

    get(urlName: any, options?) {
        return this.httpClient.get(this.getFullUrl(urlName));
    }

    put(urlName: any, options?) {
        return this.httpClient.put(this.getFullUrl(urlName, options), options);
    }

    private getFullUrl(urlname: any, options?) {
        const baseUrl = environment.baseUrl;
        const endpoint = this.buildUrlWithParams(urlname,options);
        return baseUrl + endpoint;
    }

    private buildUrlWithParams(urlName: any, options?) {
        const endPoint = this.apiConfig.reqName[urlName].endPoint;
        if(options) {
            let dataToReplace = endPoint.split(':')[1];
            if(dataToReplace.indexOf('/') >= -1){
                dataToReplace = dataToReplace.split('/')[0];
            }
            else {
                dataToReplace = dataToReplace;
            }
            return endPoint.replace(dataToReplace,options);
        }
        else {
            return endPoint;
        }
    }
}