import { Component, OnInit } from '@angular/core';

import { Place } from "../shared/place";
import{PlaceService} from "../services/place.service";


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  place: Place;
  places: Place[];
  selectedPlace: Place;
  placeIds: number[];
  prev: number;
  next: number;

  constructor(private placeService: PlaceService) { }

  ngOnInit() {

    this.placeService.getPlaces().subscribe(places => this.places = places);
  }

  onSelect(place: Place) {
    this.selectedPlace = place;
  }

}
