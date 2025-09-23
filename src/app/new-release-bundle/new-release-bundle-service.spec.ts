import { TestBed } from '@angular/core/testing';

import { NewReleaseBundleService } from './new-release-bundle-service';

describe('NewReleaseBundleService', () => {
  let service: NewReleaseBundleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewReleaseBundleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
