import { Component, OnInit, Input } from '@angular/core';
import {Machine} from '../Model/machine'
import { ActivatedRoute } from '@angular/router';
import { PlaneService } from '../plane.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-plane-details',
  templateUrl: './plane-details.component.html',
  styleUrls: ['./plane-details.component.css']
})
export class PlaneDetailsComponent implements OnInit {

  @Input() InputPlane : Machine;

  constructor(
    private route: ActivatedRoute,
    private planeService: PlaneService,
    private location: Location
  ) { }

  ngOnInit():void {
    this.getPlane();

  }

  public getPlane():void {
    const id= +this.route.snapshot.paramMap.get('id');

    this.planeService.getPlane(id).subscribe(plane => this.InputPlane = plane);

  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.planeService.updatePlane(this.InputPlane).subscribe(() => this.goBack());
  }



}
