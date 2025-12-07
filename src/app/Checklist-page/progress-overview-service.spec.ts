import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProgressOverviewService } from './progress-overview-service';

describe('ProgressOverviewService', () => {
  let service: ProgressOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(ProgressOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
