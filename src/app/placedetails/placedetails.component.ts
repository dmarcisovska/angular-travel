import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Place } from "../shared/place";
import{PLACES} from "../shared/places";
import{PlaceService} from "../services/place.service";
import{Comment} from "../shared/comment";

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-placedetails',
  templateUrl: './placedetails.component.html',
  styleUrls: ['./placedetails.component.scss']
})
export class PlacedetailsComponent implements OnInit {

  @Input()
  commentForm: FormGroup;
  comment: Comment;
  place: Place;
  placecopy = null;
  placeIds: number[];
  prev: number;
  next: number;
  places: Place[] = PLACES;
  selectedPlace: Place;

  onSelect(place: Place) {
    this.selectedPlace = place;
  }

  formErrors = {
    'author': '',
    'comment': ''
  };

  validationMessages = {
    'author': {
      'required':      'name is required.',
      'minlength':     'name must be at least 2 characters long.',
    },
    'comment': {
      'required':      'Comment is required.'
    },

  };

  constructor(private placeService: PlaceService,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder,) {

         this.createForm();
  }

  ngOnInit() {

    this.placeService.getPlaceIds().subscribe(placeIds => this.placeIds = placeIds);
    this.route.params.pipe(switchMap((params: Params) => this.placeService.getPlace(+params['id'])))
      .subscribe(place => { this.place = place; this.setPrevNext(place.id); });
  }

  setPrevNext(placeId: number) {
    const index = this.placeIds.indexOf(placeId);
    this.prev = this.placeIds[(this.placeIds.length + index - 1) % this.placeIds.length];
    this.next = this.placeIds[(this.placeIds.length + index + 1) % this.placeIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2)] ],
      //rating: '5',
      rating: new FormControl('5'),
      comment: ['', [Validators.required] ],
      date: '',
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {

    this.comment = this.commentForm.value;
    console.log(this.comment);
    this.comment.date = new Date().toISOString();

    this.place.comments.push(this.comment);

    this.placecopy.comments.push(this.comment);
    this.placecopy.save()
      .subscribe(place => {
        this.place = place;
        console.log(this.place);
      });

    this.commentForm.reset({
      author: '',
      rating: '5',
      comment: '',
      date: ''
    });

  }

}
