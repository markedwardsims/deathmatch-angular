import { TestBed, inject } from '@angular/core/testing';

import { DeathmatchApiService } from './deathmatch-api.service';

describe('DeathmatchApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeathmatchApiService]
    });
  });

  it('should be created', inject([DeathmatchApiService], (service: DeathmatchApiService) => {
    expect(service).toBeTruthy();
  }));
});
