import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from '../../core/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClientService : HttpClientService) { }

  getService1() : Observable<any>{
    return this.httpClientService.get('dashboardEntity', {
      pathParamameters : {
        id : '1'
      }
    });
  }

  getService2(param: any, data: any) : Observable<any> {
    return this.httpClientService.put('registrationEntity', data, {
      pathParamameters : {
        id : param
      }
      });
  }

  getService3(data: any): Observable<any> {
    return this.httpClientService.post('dashboardEntityNew', data);
  }
}
