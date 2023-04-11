import { TestBed } from '@angular/core/testing';

import { RestAPIsService } from './rest-apis.service';

describe('RestAPIsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestAPIsService = TestBed.get(RestAPIsService);
    expect(service).toBeTruthy();
  });
});
