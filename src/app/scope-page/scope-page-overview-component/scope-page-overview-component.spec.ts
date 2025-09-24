import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopePageOverviewComponent } from './scope-page-overview-component';

describe('ScopePageOverviewComponent', () => {
  let component: ScopePageOverviewComponent;
  let fixture: ComponentFixture<ScopePageOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScopePageOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScopePageOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
