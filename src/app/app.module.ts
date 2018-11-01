import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { PlacedetailsComponent } from './placedetails/placedetails.component';
import { TravelComponent } from './travel/travel.component';
import { ContactComponent } from './contact/contact.component';


import{PlaceService} from "./services/place.service";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    PlacedetailsComponent,
    TravelComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
