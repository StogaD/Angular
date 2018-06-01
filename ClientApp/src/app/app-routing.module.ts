import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirplaneComponent } from './airplane/airplane.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import {PlaneDetailsComponent} from "./plane-details/plane-details.component";


const routes: Routes = [
{path: '', redirectTo:'/dashboard', pathMatch: 'full' },
{path: 'dashboard', component: DashboardComponent },
{path: 'detail/:id', component:PlaneDetailsComponent },
{path: 'planes', component: AirplaneComponent },
]
  

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
