import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Photos.SearchComponent } from './photos.search.component';

describe('Photos.SearchComponent', () => {
  let component: Photos.SearchComponent;
  let fixture: ComponentFixture<Photos.SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Photos.SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Photos.SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
