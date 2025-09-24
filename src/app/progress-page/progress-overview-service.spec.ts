import { TestBed } from '@angular/core/testing';

import { ProgressOverviewService } from './progress-overview-service';

describe('ProgressOverviewService', () => {
  let service: ProgressOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
