import { TestBed, async, inject } from '@angular/core/testing';

import { RestGuardGuard } from './restGuard.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestGuardGuard]
    });
  });

  it('should ...', inject([RestGuardGuard], (guard: RestGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});