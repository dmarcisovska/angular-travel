import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacedetailsComponent } from './placedetails.component';

describe('PlacedetailsComponent', () => {
  let component: PlacedetailsComponent;
  let fixture: ComponentFixture<PlacedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
