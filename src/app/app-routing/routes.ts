import { Routes } from '@angular/router';
import{ HomeComponent } from "../home/home.component";
import{ TravelComponent } from "../travel/travel.component";
import{ ContactComponent } from "../contact/contact.component";
import{PlacedetailsComponent} from "../placedetails/placedetails.component";

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'travel',     component: TravelComponent },
  { path: 'contact',     component: ContactComponent },
  { path: 'placedetails/:id',     component: PlacedetailsComponent },
  { path: 'placedetails',     component: PlacedetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
