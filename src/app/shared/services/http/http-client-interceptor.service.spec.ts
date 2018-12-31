import { TestBed, inject } from '@angular/core/testing';

import { HttpClientInterceptorService } from './http-client-interceptor.service';

describe('HttpClientInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientInterceptorService]
    });
  });

  it('should be created', inject([HttpClientInterceptorService], (service: HttpClientInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
