import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data : any;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  }

  service1() {
    this.dashboardService.getService1().subscribe(res => {
      this.data = res;
    });
  }

  service2() {
    this.dashboardService.getService2('123').subscribe();
  }

  service3() {

  }
  

}
