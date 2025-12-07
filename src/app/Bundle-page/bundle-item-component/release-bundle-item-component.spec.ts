import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseBundleItemComponent } from './release-bundle-item-component';

describe('ReleaseBundleItemComponent', () => {
  let component: ReleaseBundleItemComponent;
  let fixture: ComponentFixture<ReleaseBundleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleaseBundleItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ReleaseBundleItemComponent);
    component = fixture.componentInstance;

    component.bundle = {
      bundleID: 1,
      bundleName: 'Test bundle',
      retired: false
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
