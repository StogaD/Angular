import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Machine } from '../Model/machine';
import { PlaneService } from '../plane.service';

@Component({
  selector: 'app-airplane',
  templateUrl: './airplane.component.html',
  styleUrls: ['./airplane.component.css']
})
export class AirplaneComponent implements OnInit {

   machines : Machine[];
   plane: string  ="None";
   selectedPlane: Machine;
   
    getPlanes(): void 
    {
     // this.machines = this.planeService.getPlanes();
     this.planeService.getPlanes().subscribe(machines=>this.machines = machines);
    }
    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.planeService.addMachine({ name } as Machine)
        .subscribe(hero => {
          this.machines.push(hero);
        });
    }

    delete(planeToDelete: Machine): void {
      this.machines= this.machines.filter(h => h !== planeToDelete);
      this.planeService.deletePlane(planeToDelete).subscribe();
    }

   onSelect(ClickedPlane: Machine)
   {
     this.selectedPlane  = ClickedPlane;
   }

  constructor(private planeService: PlaneService) { 
  }
  ngOnInit() { 
     this.getPlanes();
  }

}
