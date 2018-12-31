import { TestBed, inject } from '@angular/core/testing';

import { FlickrApiService } from './flickr-api.service';

describe('FlickrApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlickrApiService]
    });
  });

  it('should be created', inject([FlickrApiService], (service: FlickrApiService) => {
    expect(service).toBeTruthy();
  }));
});
