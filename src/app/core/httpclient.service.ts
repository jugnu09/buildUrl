import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfig, ModuleMapper } from './core.config';
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

    get(urlName: any, options?: any) {
        return this.httpClient.get(this.getFullUrl(urlName, options));
    }

    put(urlName: any, data: any, options?: any) {
        return this.httpClient.put(this.getFullUrl(urlName, options), data);
    }

    post(urlName: any, data:any, options?:any) {
        return this.httpClient.post(this.getFullUrl(urlName, options), data);
    }

    private getFullUrl(urlname: any, options?: any) {
        const reqObj = this.apiConfig.reqName[urlname];
        const baseUrl = environment[ModuleMapper[reqObj['module']]];
        const endpoint = this.buildUrlWithParams(urlname,options);
        return baseUrl + endpoint;
    }

    private buildUrlWithParams(urlName: any, options?: any) {
        const endPoint = this.apiConfig.reqName[urlName].endPoint;
        if(options) {
            const path = endPoint.split('/');
            const pathArr =[];
            const pathParams = options && options['pathParamameters'] || {};
            path.forEach(element => {
                pathArr.push(element[0] === ":" ? pathParams[element.substring(1)] : element);
            });
            return pathArr.join('/');
        }
        else {
            return endPoint;
        }
    }
}