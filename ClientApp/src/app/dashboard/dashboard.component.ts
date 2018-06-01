import { Component, OnInit } from '@angular/core';
import {Machine  } from '../Model/machine'
import { PlaneService } from '../plane.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  planes: Machine[] = [];
 
  constructor(private planeService: PlaneService) { }
 
  ngOnInit() {
    this.getPlanes();
  }
 
  getPlanes(): void {
    this.planeService.getPlanes()
      .subscribe(planes => this.planes = planes.slice(1, 5));
  }
}