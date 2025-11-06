import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleReleaseDialogComponent } from './bundle-release-dialog-component';

describe('BundleReleaseDialogComponent', () => {
  let component: BundleReleaseDialogComponent;
  let fixture: ComponentFixture<BundleReleaseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BundleReleaseDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundleReleaseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
