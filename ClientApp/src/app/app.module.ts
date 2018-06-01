import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AirplaneComponent } from './airplane/airplane.component';
import {FormsModule} from '@angular/forms';
import { PlaneDetailsComponent } from './plane-details/plane-details.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AppRoutingModule } from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';

      
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AirplaneSearchComponent } from './airplane-search/airplane-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AirplaneComponent,
    PlaneDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    AirplaneSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,{dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
