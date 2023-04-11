import { TestBed } from '@angular/core/testing';

import { ParallaxService } from './parallax.service';

describe('ParallaxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParallaxService = TestBed.get(ParallaxService);
    expect(service).toBeTruthy();
  });
});
