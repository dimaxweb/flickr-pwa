import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosAdvancedFilterComponent } from './photos-advanced-filter.component';

describe('PhotosAdvancedFilterComponent', () => {
  let component: PhotosAdvancedFilterComponent;
  let fixture: ComponentFixture<PhotosAdvancedFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosAdvancedFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosAdvancedFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
