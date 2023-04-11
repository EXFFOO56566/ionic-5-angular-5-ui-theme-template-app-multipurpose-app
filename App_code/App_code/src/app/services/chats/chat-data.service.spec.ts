import { TestBed } from '@angular/core/testing';

import { ChatDataService } from './chat-data.service';

describe('ChatDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatDataService = TestBed.get(ChatDataService);
    expect(service).toBeTruthy();
  });
});
