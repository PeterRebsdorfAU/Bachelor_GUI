import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BundleReleasesDialogComponent } from './bundle-release-dialog-component';
import { UserRole } from '../../user-role.enum';
import {LoginService} from '../../Login/login-service';

describe('BundleReleasesDialogComponent', () => {
  let component: BundleReleasesDialogComponent;
  let fixture: ComponentFixture<BundleReleasesDialogComponent>;

  let mockDialogRef: jasmine.SpyObj<MatDialogRef<BundleReleasesDialogComponent>>;
  let mockLoginService: any;

  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    mockLoginService = { getUser: jasmine.createSpy() };

    await TestBed.configureTestingModule({
      imports: [BundleReleasesDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            bundle: { bundleID: 1, bundleName: 'Test bundle' },
            releases: []
          }
        },
        { provide: LoginService, useValue: mockLoginService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BundleReleasesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // -------------------------------------------------------
  // ✔ TEST 1: isReleaseManager returns true for ReleaseManager
  // -------------------------------------------------------
  it('should return true for isReleaseManager when user is ReleaseManager', () => {
    mockLoginService.getUser.and.returnValue(UserRole.ReleaseManager);

    expect(component.isReleaseManager).toBeTrue();
  });

  // -------------------------------------------------------
  // ✔ TEST 2: onReleaseSelected closes the dialog with correct payload
  // -------------------------------------------------------
  it('should close the dialog when onReleaseSelected is called', () => {
    const release = {
      bundleReleaseName: 'Rel 1'
    } as any;

    component.onReleaseSelected(release);

    expect(mockDialogRef.close).toHaveBeenCalledWith({
      action: 'select',
      release
    });
  });
});
