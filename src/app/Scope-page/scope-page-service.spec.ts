import { TestBed } from '@angular/core/testing';

import { ScopePageService } from './scope-page-service';

describe('ScopePageService', () => {
  let service: ScopePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScopePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
