import { Injectable } from '@angular/core';
import{Place} from "../shared/place";
import{PLACES} from "../shared/places";


import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor() { }

  selectedPlace: Place;
  place: Place;

  getPlaces(): Observable<Place[]> {
    return of(PLACES);
  }

  getFeaturedPlaces(): Observable<Place> {
    return of (PLACES.filter((place) => place.featured)[0]);
  }


  getPlace(id: number): Observable<Place> {
    return of(PLACES.filter((place) => (place.id === id))[0]);
  }

  getPlaceIds(): Observable<number[] | any> {
    return of(PLACES.map(place => place.id ));
  }


}
