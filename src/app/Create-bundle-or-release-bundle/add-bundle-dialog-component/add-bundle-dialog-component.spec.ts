import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBundleReleaseDialogComponent } from './add-bundle-dialog-component';

describe('AddBundleReleaseDialogComponent', () => {
  let component: AddBundleReleaseDialogComponent;
  let fixture: ComponentFixture<AddBundleReleaseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBundleReleaseDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBundleReleaseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
