import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedBundleReleaseComponent } from './planned-bundle-release-component';

describe('PlannedBundleReleaseComponent', () => {
  let component: PlannedBundleReleaseComponent;
  let fixture: ComponentFixture<PlannedBundleReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannedBundleReleaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannedBundleReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
