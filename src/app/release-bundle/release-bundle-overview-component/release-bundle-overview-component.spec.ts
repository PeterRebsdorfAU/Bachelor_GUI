import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseBundleOverviewComponent } from './release-bundle-overview-component';

describe('ReleaseBundleOverviewComponent', () => {
  let component: ReleaseBundleOverviewComponent;
  let fixture: ComponentFixture<ReleaseBundleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleaseBundleOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseBundleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
