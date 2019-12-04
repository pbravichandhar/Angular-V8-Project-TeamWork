import { TestBed } from '@angular/core/testing';

import { UersDetailsService } from './uers-details.service';

describe('UersDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UersDetailsService = TestBed.get(UersDetailsService);
    expect(service).toBeTruthy();
  });
});
