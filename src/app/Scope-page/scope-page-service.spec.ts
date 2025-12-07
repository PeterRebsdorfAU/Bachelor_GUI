import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ScopePageService } from './scope-page-service';
import { environment } from '../../Environments/environment.development';
import { BundleScope } from '../Models/bundle-scope';
import {PlannedRelease} from '../Models/planned-release';

describe('ScopePageService', () => {
  let service: ScopePageService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(ScopePageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // -------------------------------------------------------------------------
  // getScope()
  // -------------------------------------------------------------------------
  it('should GET planned releases and map to BundleScope', () => {
    const mockReleases = [{ plannedReleaseID: 1, name: 'Test' }];
    const bundleId = 123;

    service.getScope(bundleId).subscribe((result: BundleScope) => {
      expect(result.bundleId).toBe(bundleId);
      expect(result.plannedReleases.length).toBe(1);
    });

    const req = httpMock.expectOne(
      `${apiUrl}/GetPlannedReleases?bundleReleaseID=${bundleId}`
    );
    expect(req.request.method).toBe('GET');

    req.flush(mockReleases);
  });

  // -------------------------------------------------------------------------
  // addSystemToBundle()
  // -------------------------------------------------------------------------
  it('should POST sequence and finally return updated scope', () => {
    const bundleId = 10;
    const systemName = 'System A';

    // Step 1 returns system
    const mockSystem = { systemID: 99 };

    // Step 2 returns planned release
    const mockPlanned = { plannedReleaseID: 55 };

    // Final scope
    const mockPlannedRelease: PlannedRelease = {
      plannedReleaseID: 55,
      name: 'Test planned release',
      system: 'TestSystem',
      releaseCandidate: null,
      bundle: 'TestBundle',
      bundleRelease: 'TestBundleRelease',
      status: 1
    };

    service.addSystemToBundle(bundleId, systemName).subscribe(result => {
      expect(result.bundleId).toBe(bundleId);
      expect(result.plannedReleases.length).toBe(1);
    });

    // Call 1: Insert system
    const req1 = httpMock.expectOne(
      `${apiUrl}/System/InsertSystem?systemName=${encodeURIComponent(systemName)}`
    );
    expect(req1.request.method).toBe('POST');
    req1.flush(mockSystem);

    // Call 2: Add planned release
    const req2 = httpMock.expectOne(
      `${apiUrl}/AddPlannedRelease?systemId=${mockSystem.systemID}&plannedReleaseName=${encodeURIComponent(systemName)}`
    );
    expect(req2.request.method).toBe('POST');
    req2.flush(mockPlanned);

    // Call 3: Insert planned release into bundle
    const req3 = httpMock.expectOne(
      `${apiUrl}/AddPlannedReleaseInBundleRelease?bundleReleaseId=${bundleId}&plannedReleaseId=${mockPlanned.plannedReleaseID}`
    );
    expect(req3.request.method).toBe('POST');
    req3.flush({});

    // Final: getScope lookup
    const req4 = httpMock.expectOne(
      `${apiUrl}/GetPlannedReleases?bundleReleaseID=${bundleId}`
    );
    req4.flush([mockPlannedRelease]);
  });

  // -------------------------------------------------------------------------
  // removeSystemFromBundle()
  // -------------------------------------------------------------------------
  it('should DELETE planned release and return updated scope', () => {
    const bundleId = 20;
    const plannedId = 5;
    const mockScope: BundleScope = { bundleId, plannedReleases: [] };

    service.removeSystemFromBundle(bundleId, plannedId).subscribe(result => {
      expect(result.plannedReleases.length).toBe(0);
    });

    const req1 = httpMock.expectOne(
      `${apiUrl}/DeletePlannedRelease?plannedReleaseId=${plannedId}`
    );
    expect(req1.request.method).toBe('DELETE');
    req1.flush({});

    const req2 = httpMock.expectOne(
      `${apiUrl}/GetPlannedReleases?bundleReleaseID=${bundleId}`
    );
    req2.flush([]);
  });

  // -------------------------------------------------------------------------
  // updatePlannedReleaseStatus()
  // -------------------------------------------------------------------------
  it('should PUT updated planned release status', () => {
    const result = { success: true };
    const plannedId = 12;
    const newStatus = 3;

    service.updatePlannedReleaseStatus(plannedId, newStatus).subscribe(r => {
      expect(r.success).toBeTrue();
    });

    const req = httpMock.expectOne(
      `${apiUrl}/UpdatePlannedReleaseStatus?plannedReleaseId=${plannedId}&newStatus=${newStatus}`
    );
    expect(req.request.method).toBe('PUT');

    req.flush(result);
  });

  // -------------------------------------------------------------------------
  // assignReleaseCandidate()
  // -------------------------------------------------------------------------
  it('should PUT assign release candidate', () => {
    const result = { ok: true };
    const plannedId = 33;
    const rc = 'RC1';

    service.assignReleaseCandidate(plannedId, rc).subscribe(r => {
      expect(r.ok).toBeTrue();
    });

    const req = httpMock.expectOne(
      `${apiUrl}/AssignReleaseCandidate?plannedReleaseId=${plannedId}&releaseCandidate=${encodeURIComponent(rc)}`
    );
    expect(req.request.method).toBe('PUT');

    req.flush(result);
  });
});
