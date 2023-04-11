import { TestBed } from '@angular/core/testing';

import { FireServicesService } from './fire-services.service';

describe('FireServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireServicesService = TestBed.get(FireServicesService);
    expect(service).toBeTruthy();
  });
});
