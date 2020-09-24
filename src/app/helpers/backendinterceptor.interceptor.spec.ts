import { TestBed } from '@angular/core/testing';

import { BackendinterceptorInterceptor } from './backendinterceptor.interceptor';

describe('BackendinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BackendinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BackendinterceptorInterceptor = TestBed.inject(BackendinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
