import { TestBed } from '@angular/core/testing';

import { CreateNewReleaseBundleService } from './create-new-release-bundle.service';

describe('NewReleaseBundleService', () => {
  let service: CreateNewReleaseBundleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateNewReleaseBundleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
