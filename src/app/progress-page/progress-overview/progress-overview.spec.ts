import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressOverview } from './progress-overview';

describe('ProgressOverview', () => {
  let component: ProgressOverview;
  let fixture: ComponentFixture<ProgressOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
