import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleProgressComponent } from './bundle-progress-component';

describe('BundleProgressComponent', () => {
  let component: BundleProgressComponent;
  let fixture: ComponentFixture<BundleProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BundleProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundleProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
