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
    const data = {
      "first_name": "Ritesh",
      "last_name": "Singh",
      "email": "thakur.ritesh07@gmail.com"
    }
    this.dashboardService.getService2('1', data).subscribe();
  }

  service3() {
    const data = {
      "first_name": "Neha",
      "last_name": "Singh",
      "email": "thakur.ritesh07@gmail.com"
    }
    this.dashboardService.getService3(data).subscribe();
  }
  

}
