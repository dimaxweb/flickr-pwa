import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Photo.DetailsComponent } from './photo.details.component';

describe('Photo.DetailsComponent', () => {
  let component: Photo.DetailsComponent;
  let fixture: ComponentFixture<Photo.DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Photo.DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Photo.DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
