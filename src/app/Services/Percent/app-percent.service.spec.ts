import { TestBed } from '@angular/core/testing';

import { AppPercentService } from './app-percent.service';

describe('AppPercentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppPercentService = TestBed.get(AppPercentService);
    expect(service).toBeTruthy();
  });
});
