import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundlePageOverviewComponent } from './bundle-page-overview-component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BundlePageOverviewComponent', () => {
  let component: BundlePageOverviewComponent;
  let fixture: ComponentFixture<BundlePageOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BundlePageOverviewComponent,
      HttpClientTestingModule]
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
