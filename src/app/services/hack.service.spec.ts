import { TestBed } from '@angular/core/testing';

import { HackService } from './hack.service';

describe('HackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HackService = TestBed.get(HackService);
    expect(service).toBeTruthy();
  });
});
