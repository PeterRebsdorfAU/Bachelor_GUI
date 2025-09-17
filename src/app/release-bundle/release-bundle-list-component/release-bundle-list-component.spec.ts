import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseBundleListComponent } from './release-bundle-list-component';

describe('ReleaseBundleListComponent', () => {
  let component: ReleaseBundleListComponent;
  let fixture: ComponentFixture<ReleaseBundleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleaseBundleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseBundleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
