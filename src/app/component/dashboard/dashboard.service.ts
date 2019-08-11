import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from '../../core/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClientService : HttpClientService) { }

  getService1() : Observable<any>{
    return this.httpClientService.get('dashboardEntity');
  }

  getService2(param: any) : Observable<any> {
    return this.httpClientService.put('registrationEntity',param);
  }

  getService3(): Observable<any> {
    return 
  }
}
