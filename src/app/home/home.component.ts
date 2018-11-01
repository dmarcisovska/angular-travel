import { Component, OnInit } from '@angular/core';
import{Place} from "../shared/place";
import{PLACES} from "../shared/places";
import{PlaceService} from "../services/place.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  places: Place[];
  place: Place;

  constructor(private placeService: PlaceService) {

    this.placeService.getPlaces().subscribe(places => this.places = places);
    this.placeService.getFeaturedPlaces().subscribe(place => this.place = place);

  }

  ngOnInit() {
  }

}
