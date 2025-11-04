import { TestBed } from '@angular/core/testing';

import { CreateBundleReleaseService } from './create-bundle-release-service';

describe('CreateBundleReleaseService', () => {
  let service: CreateBundleReleaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateBundleReleaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
