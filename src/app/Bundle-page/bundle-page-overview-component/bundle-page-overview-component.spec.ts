import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundlePageOverviewComponent } from './bundle-page-overview-component';

describe('BundlePageOverviewComponent', () => {
  let component: BundlePageOverviewComponent;
  let fixture: ComponentFixture<BundlePageOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BundlePageOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundlePageOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
