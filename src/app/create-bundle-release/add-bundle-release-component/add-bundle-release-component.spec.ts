import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBundleReleaseComponent } from './add-bundle-release-component';

describe('AddBundleReleaseComponent', () => {
  let component: AddBundleReleaseComponent;
  let fixture: ComponentFixture<AddBundleReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBundleReleaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBundleReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
