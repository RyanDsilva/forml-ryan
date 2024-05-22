import { TestBed } from '@angular/core/testing';

import { CrackSafeApiService } from './crack-safe-api.service';

describe('CrackSafeApiService', () => {
  let service: CrackSafeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrackSafeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
