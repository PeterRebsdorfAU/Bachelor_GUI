import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBundleReleaseDialogComponent } from './add-bundle-release-dialog-component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('AddBundleReleaseDialogComponent', () => {
  let component: AddBundleReleaseDialogComponent;
  let fixture: ComponentFixture<AddBundleReleaseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBundleReleaseDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBundleReleaseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
